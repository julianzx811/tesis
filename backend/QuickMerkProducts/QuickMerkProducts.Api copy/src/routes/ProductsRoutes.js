const express = require("express");
const router = express.Router();

const ProductsController = require("../controllers/ProductsController");

router.get("/", ProductsController.getAllProducts);

router.get("/:ProductId", ProductsController.getOneProduct);

router.post("/", ProductsController.createNewProduct);

router.patch("/:ProductId", ProductsController.updateOneProduct);

router.delete("/:ProductId", ProductsController.deleteOneProduct);

module.exports = router;
