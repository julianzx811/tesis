const ProductsService = require("../services/ProductsService");
const { querys } = require("../database/querys");

const getAllProducts = async (req, res,next) => {
  const allproducts = await ProductsService.getAllProducts(next);
  return res.status(201).json(allproducts.recordset);
};

const getOneProduct = async (req, res,next) => {
  const {
    params: { ProductId },
  } = req;
  if (!ProductId) {
    return;
  }
  const Producto = await ProductsService.getOneProduct(ProductId,next);
  if (Producto) {
    return res.status(201).json(Producto);
  } else {
    return res.status(404).send('el producto no existe');
  }
};

const createNewProduct = async (req, res) => {
  const producto = { ...req.body };
  const newProducto = await ProductsService.createNewProduct(producto);
  if (newProducto) {
    return res.status(201).json(newProducto);;
  } else {
    return res.status(400).send('no se pudo crear el producto');
  }
};

const updateOneProduct = (req, res,next) => {
  const {
    params: { ProductId },
  } = req;
  const producto = { ...req.body };
  const UpdateProduct = ProductsService.updateOneProduct(ProductId, producto,next);
  if (UpdateProduct) {
    return res.send({ status: "OK", data: UpdateProduct });
  } else {
    return res.status(401).send('el producto no existe');
  }
};

const deleteOneProduct = async (req, res) => {
  const {
    params: { ProductId },
  } = req;
  const deleteProduct = await ProductsService.deleteOneProduct(ProductId);
  if (deleteProduct) {
    return res.send({ status: "OK", data: "done" });
  } else {
    return res.status(401).send('el producto no existe');
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  createNewProduct,
  updateOneProduct,
  deleteOneProduct,
};
