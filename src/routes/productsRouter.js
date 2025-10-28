// productsRouter.js
import express from "express";
import { createProductsHandler, deleteProductsHandler, getAllProductsHandler, getProductsByIdHandler, updateProductsHandler } from "../controllers/productController.js";

const productsRouter = express.Router();

productsRouter.get("/products", getAllProductsHandler);
productsRouter.get("/products/:id", getProductsByIdHandler);
productsRouter.post("/products", createProductsHandler);
productsRouter.put("/products/:id", updateProductsHandler);
productsRouter.delete("/products/:id", deleteProductsHandler);

// PASTIKAN INI ADALAH productsRouter
export default productsRouter; 