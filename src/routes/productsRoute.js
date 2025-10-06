// productsRouter.js
import express from "express";
import { addProductsHandler, deleteProductsHandler, getAllProductsHandler, getProductsByIdHandler, updateProductsHandler } from "../handlers/productHandler.js";

const productsRouter = express.Router();

productsRouter.get("/products", getAllProductsHandler);
productsRouter.get("/products/:id", getProductsByIdHandler);
productsRouter.post("/products", addProductsHandler);
productsRouter.put("/products/:id", updateProductsHandler);
productsRouter.delete("/products/:id", deleteProductsHandler);

// PASTIKAN INI ADALAH productsRouter
export default productsRouter; 