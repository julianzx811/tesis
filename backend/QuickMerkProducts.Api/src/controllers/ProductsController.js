const ProductsService = require("../services/ProductsService");
const { getConnection } = require("../database/connection");
const { querys } = require("../database/querys");

const getAllProducts = async (req, res) => {
  const allproducts = await ProductsService.getAllProducts();
  return { status: "OK", data: res.json(allproducts.recordset) };
};

const getOneProduct = async (req, res) => {
  const {
    params: { ProductId },
  } = req;
  if (!ProductId) {
    return;
  }
  const Producto = await ProductsService.getOneProduct(ProductId);
  res.send({ status: "OK", data: Producto });
};

const createNewProduct = async (req, res) => {
  const producto = { ...req.body };
  const newProducto = await ProductsService.createNewProduct(producto);
  if (newProducto) {
    return { status: "OK", data: res.json(newProducto) };
  } else {
    return { status: "401", data: res.json("algo malo paso") };
  }
};

const updateOneProduct = (req, res) => {
  const {
    params: { ProductId },
  } = req;
  const producto = { ...req.body };
  const UpdateProduct = ProductsService.updateOneProduct(ProductId, producto);
  if (UpdateProduct) {
    res.send({ status: "OK", data: UpdateProduct });
  } else {
    return { status: "400", data: res.json("algo malo paso") };
  }
};

const deleteOneProduct = async (req, res) => {
  const {
    params: { ProductId },
  } = req;
  const deleteProduct = await ProductsService.deleteOneProduct(ProductId);
  if (deleteProduct) {
    res.send({ status: "OK", data: "done" });
  } else {
    return { status: "400", data: res.json("algo malo paso") };
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
