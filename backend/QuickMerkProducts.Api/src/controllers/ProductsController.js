const ProductsService = require("../services/ProductsService");
const { getConnection } = require("../database/connection");
const { querys } = require("../database/querys");
const getAllProducts = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

const getOneProduct = (req, res) => {
  const allWorkouts = ProductsService.getOneProduct();
  res.send("Create a new workout");
};
const createNewProduct = (req, res) => {
  const allWorkouts = ProductsService.createNewProduct();
  res.send("Create a new workout");
};
const updateOneProduct = (req, res) => {
  const allWorkouts = ProductsService.updateOneProduct();
  res.send("Create a new workout");
};
const deleteOneProduct = (req, res) => {
  const allWorkouts = ProductsService.deleteOneProduct();
  res.send("Create a new workout");
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
