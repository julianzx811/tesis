const ProductsService = require("../services/ProductsService");

const getAllProducts = async (req, res,next) => {
  const allproducts = await ProductsService.getAllProducts(next);
  return res.status(200).json(allproducts.recordset);
};

const GetCategorias = async (req, res,next) =>{
  const allproducts = await ProductsService.GetCategorias(next);
  return res.status(200).json(allproducts.recordset);
}

const GetProductsByName = async (req, res,next) =>{ 
  const product = req.params.ProductName;
  const allproducts = await ProductsService.GetProductsByName(product,next);
  if (allproducts) {
    return res.status(200).json(allproducts.recordset);
  } else {
    return res.status(404).send('no se encontraron productos');
  }
}

const GetProductsByCategory = async (req, res,next) =>{ 
  const CategoriaId = req.params.CategoriaId;
  console.log(CategoriaId);
  const allproducts = await ProductsService.GetProductsByCategory(CategoriaId,next);
  if (allproducts) {
    return res.status(200).json(allproducts.recordset);
  } else {
    return res.status(404).send('no se encontraron productos para esa categoria');
  }
}

const getOneProduct = async (req, res,next) => {
  const {
    params: { ProductId },
  } = req;
  if (!ProductId) {
    return;
  }
  const Producto = await ProductsService.getOneProduct(ProductId,next);
  if (Producto) {
    return res.status(200).json(Producto);
  } else {
    return res.status(404).send('el producto no existe');
  }
};

const createNewProduct = async (req, res) => {
  const producto = { ...req.body };
  const newProducto = await ProductsService.createNewProduct(producto);
  if (newProducto) {
    return res.status(201).json(newProducto);
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
    return  res.status(200);
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
    return  res.status(200);
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
  GetCategorias,
  GetProductsByName,
  GetProductsByCategory
};
