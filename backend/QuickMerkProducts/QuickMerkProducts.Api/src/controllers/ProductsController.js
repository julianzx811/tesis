const ProductsService = require("../services/ProductsService");

const getAllProducts = async (req, res, next) => {
  try {
    const allproducts = await ProductsService.getAllProducts();
    return res.status(200).json(allproducts);
  } catch (error) {
    next(error);
  }
};

const GetCategorias = async (req, res, next) => {
  try {
    const allproducts = await ProductsService.GetCategorias(next);
    return res.status(200).json(allproducts.recordset);
  } catch (error) {
    next(error);
  }
};

const GetProductsByName = async (req, res, next) => {
  try {
    const product = req.params.ProductName;
    const allproducts = await ProductsService.GetProductsByName(product, next);
    if (allproducts) {
      return res.status(200).json(allproducts.recordset);
    } else {
      return res.status(404).send("no se encontraron productos");
    }
  } catch (error) {
    next(error);
  }
};

const GetProductsByCategory = async (req, res, next) => {
  try {
    const CategoriaId = req.params.CategoriaId;
    const allproducts = await ProductsService.GetProductsByCategory(
      CategoriaId,
      next
    );
    if (allproducts) {
      return res.status(200).json(allproducts.recordset);
    } else {
      return res
        .status(404)
        .send("no se encontraron productos para esa categoria");
    }
  } catch (error) {
    next(error);
  }
};

const getOneProduct = async (req, res, next) => {
  try {
    const {
      params: { ProductId },
    } = req;
    if (!ProductId) {
      return;
    }
    const Producto = await ProductsService.getOneProduct(ProductId, next);
    if (Producto) {
      return res.status(200).json(Producto);
    } else {
      return res.status(404).send("el producto no existe");
    }
  } catch (error) {
    next(error);
  }
};

const createNewProduct = async (req, res, next) => {
  try {
    const producto = { ...req.body };
    const newProducto = await ProductsService.createNewProduct(producto);
    if (newProducto) {
      return res.status(201).json(newProducto);
    } else {
      return res.status(400).send("no se pudo crear el producto");
    }
  } catch (error) {
    next(error);
  }
};

const updateOneProduct = (req, res, next) => {
  try {
    const {
      params: { ProductId },
    } = req;
    const producto = { ...req.body };
    const UpdateProduct = ProductsService.updateOneProduct(
      ProductId,
      producto,
      next
    );
    if (UpdateProduct) {
      return res.status(200);
    } else {
      return res.status(401).send("el producto no existe");
    }
  } catch (error) {
    next(error);
  }
};

const deleteOneProduct = async (req, res, next) => {
  try {
    const {
      params: { ProductId },
    } = req;
    const deleteProduct = await ProductsService.deleteOneProduct(ProductId);
    if (deleteProduct) {
      return res.status(200);
    } else {
      return res.status(401).send("el producto no existe");
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
  GetCategorias,
  GetProductsByName,
  GetProductsByCategory,
};
