//const { v4: uuid } = require("uuid");
const { pool, query } = require("mssql");
const { getConnection } = require("../database/connection");
const { querys } = require("../database/querys");

const getAllProducts = async () => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    return result;
  } catch (error) {
    return error;
  }
};

const getOneProduct = async (ProductId) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("Id", ProductId)
      .query(querys.getProducById);

    if (result.recordset.length === 0) {
      console.log("No product found for ProductId:", ProductId);
      return null; // Return null or appropriate value to indicate no data found
    }

    console.log(result.recordset[0]);
    return result.recordset[0];
  } catch (error) {
    console.error("Error while fetching product:", error);
    return null; // Return null or appropriate value to indicate an error occurred
  }
};

const createNewProduct = async (Product) => {
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
    return null;
  }
};

const updateOneProduct = async (ProductId, changes) => {
  try {
    console.log(ProductId);
    console.log(changes);
    const pool = await getConnection();

    const ProductoInfoId = await pool
      .request()
      .input("Id", ProductId)
      .query(querys.ProductoInfoId);

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
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return null;
  }
};

const deleteOneProduct = async (ProductId) => {
  try {
    const pool = await getConnection();

    const ProductoInfoId = await pool
      .request()
      .input("Id", ProductId)
      .query(querys.ProductoInfoId);

    const DeleteProduct = await pool
      .request()
      .input("ProductInfoId", ProductoInfoId.recordset[0].info)
      .input("ProductId", ProductId)
      .query(querys.DeleteProduct);

    return DeleteProduct;
  } catch (error) {
    console.error("Error executing SQL query:", error);
    return null;
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
