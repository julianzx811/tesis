//const { v4: uuid } = require("uuid");
const { pool, query } = require("mssql");
const { getConnection } = require("../database/connection");
const { querys } = require("../database/querys");
const { ProductMappers } = require("../mappers/ProductMapper");

const getAllProducts = async () => {
  const pool = await getConnection();
  const Products = await pool.request().query(querys.getAllProducts);
  const ProductsInfo = await pool.request().query(querys.getAllProductsInfo);
  const allProducts = Products.recordset.map((producto, index) => {
    return ProductMappers(producto, ProductsInfo.recordset[index]);
  });

  return allProducts;
};

const GetCategorias = async () => {
  const pool = await getConnection();
  const Categorias = await pool.request().query(querys.getAllcategories);
  return Categorias;
};

const GetProductsByCategory = async (CategoriaId) => {
  const pool = await getConnection();
  const Products = await pool
    .request()
    .input("categoria", CategoriaId)
    .query(querys.GetProductByCategoria);

  return Products;
};

const GetProductsByName = async (productName) => {
  const pool = await getConnection();
  const Products = await pool
    .request()
    .input("ProductoName", productName)
    .query(querys.GetProductByName);
  return Products;
};

const getOneProduct = async (ProductId) => {
  const pool = await getConnection();

  //check if product exist returning its id
  const result = await pool
    .request()
    .input("Id", ProductId)
    .query(querys.getProductInfo);

  if (result.recordset.length === 0) {
    return null;
  }

  return result.recordset[0];
};

const createNewProduct = async (Product) => {
  const pool = await getConnection();

  if (Product.categoria == null) {
    Product.categoria = 1;
  }
  //añadiendo info
  const info = await pool
    .request()
    .input("precio", Product.precio)
    .input("Disponibilidad", Product.Disponibilidad)
    .input("Imagen", Product.Imagen)
    .input("Descripcion", Product.Descripcion)
    .input("categoria", Product.categoria)
    .input("link", Product.link)
    .query(querys.PostProductInfo);

  const infoId = info.recordset[0].id;

  const Producto = await pool
    .request()
    .input("ProductName", Product.ProductName)
    .input("info", infoId)
    .input("tiendaId", Product.tiendaId)
    .query(querys.PostProduct);

  return Product;
};

const updateOneProduct = async (ProductId, changes) => {
  const pool = await getConnection();

  //checks if products exist and returns its id
  const ProductoInfoId = await pool
    .request()
    .input("Id", ProductId)
    .query(querys.ProductoInfoId);

  if (ProductId.recordset[0].info) {
    //updating product
    const Producto = await pool
      .request()
      .input("ProductName", changes.ProductName)
      .input("tiendaId", changes.tiendaId)
      .input("ProductId", ProductId)
      .query(querys.UpdateProduct);

    const ProductoInfo = await pool
      .request()
      .input("precio", changes.precio)
      .input("Disponibilidad", changes.Disponibilidad)
      .input("Imagen", changes.Imagen)
      .input("Descripcion", changes.Descripcion)
      .input("ProductInfoId", ProductoInfoId.recordset[0].info)
      .query(querys.UpdateProductInfo);

    return changes;
  } else {
    return null;
  }
};

const deleteOneProduct = async (ProductId) => {
  const pool = await getConnection();
  //check if product exist and returns its id
  const ProductoInfoId = await pool
    .request()
    .input("Id", ProductId)
    .query(querys.ProductoInfoId);

  if (ProductoInfoId) {
    const DeleteProduct = await pool
      .request()
      .input("ProductInfoId", ProductoInfoId.recordset[0].info)
      .input("ProductId", ProductId)
      .query(querys.DeleteProduct);

    return DeleteProduct;
  } else {
    return null;
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
  GetCategorias,
  GetProductsByName,
  GetProductsByCategory,
};
