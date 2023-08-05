//const { v4: uuid } = require("uuid");
const { getConnection } = require("../database/connection");

const getAllProducts = async () => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    return { status: "OK", data: res.json(result.recordset) };
  } catch (error) {
    return { status: "500", data: error.message };
  }
};

const getOneProduct = (ProductId) => {
  return;
};

const createNewProduct = (newProduct) => {
  return;
};

const updateOneProduct = (ProductId, changes) => {
  return;
};

const deleteOneProduct = (ProductId) => {
  return;
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
