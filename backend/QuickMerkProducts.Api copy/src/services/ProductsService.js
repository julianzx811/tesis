//const { v4: uuid } = require("uuid");
const { pool, query } = require("mssql");
const { getConnection } = require("../database/connection");
const { querys } = require("../database/querys");

const getAllProducts = async (next) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    return result;
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (ProductId, next) => {
  try {
    const pool = await getConnection();

    //check if product exist
    const result = await pool
      .request()
      .input("Id", ProductId)
      .query(querys.getProducById);

    if (result.recordset.length === 0) {
      return null;
    }

    //getting product info
    const productInfo = await pool
      .request()
      .input("ProductInfoId", result.recordset[0].info)
      .query(querys.ProductoInfo);

    const product = {
      ProductId: result.ProductId,
      ProductName: result.ProductName,
      tiendaId: result.tiendaId,
      precio: productInfo.precio,
      Disponibilidad: productInfo.Disponibilidad,
      Imagen: productInfo.Imagen,
      Descripcion: productInfo.Descripcion,
    };
    return product;
  } catch (error) {
    next(error);
  }
};

const createNewProduct = async (Product, next) => {
  try {
    const pool = await getConnection();

    //añadiendo info
    const info = await pool
      .request()
      .input("precio", Product.precio)
      .input("Disponibilidad", Product.Disponibilidad)
      .input("Imagen", Product.Imagen)
      .input("Descripcion", Product.Descripcion)
      .query(querys.PostProductInfo);

    const infoId = info.recordset[0].id;

    console.log(infoId);

    const Producto = await pool
      .request()
      .input("ProductName", Product.ProductName)
      .input("info", infoId)
      .input("tiendaId", Product.tiendaId)
      .query(querys.PostProduct);

    return Product;
  } catch (error) {
    next(error);
  }
};

const updateOneProduct = async (ProductId, changes, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

const deleteOneProduct = async (ProductId, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
