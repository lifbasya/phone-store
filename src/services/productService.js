import { pool } from "../config/db.js";
import { ResponseError } from "../errors/responseError.js";
import { createProductSchema } from "../validations/productValidations.js";
import validate from "../validations/validate.js";

export const getAllProduct = async () => {
  const [products] = await pool.query("SELECT * FROM products");
  return products;
};

export const getProductById = async (id) => {
  const [products] = await pool.query("SELECT * FROM products WHERE id=?", [
    id,
  ]);

  if (products.length === 0) {
    throw new ResponseError(404, "Product not found");
  }

  return products[0];
};

export const createProduct = async (req) => {
  const validatedData = validate(createProductSchema, req);
  const { user_id, name, description, price, stock } = validatedData;

  const [products] = await pool.query(
    "INSERT INTO products (user_id, name, description, price, stock) VALUES (?, ?, ?, ?, ?)",
    [user_id, name, description, price, stock]
  );

  const newProduct = {
    id: products.insertId,
    user_id,
    name,
    description,
    price,
    stock,
  };

  return newProduct;
};

export const updateProduct = async (id, req) => {
  const { user_id, name, description, price, stock } = req;

  const [result] = await pool.query(
    "UPDATE products SET user_id=?, name=?, description=?, price=?, stock=? WHERE id=?",
    [user_id, name, description, price, stock, id]
  );

  if (result.affectedRows === 0) {
    throw new ResponseError(404, "Failed to update Product");
  }

  return {
    id,
    user_id,
    name,
    description,
    price,
    stock,
  };
};

export const deleteProduct = async (id) => {
  const [result] = await pool.query("DELETE FROM products WHERE id = ?", [id]);

  if (result.affectedRows === 0) {
    throw new ResponseError(404, "Failed to delete product");
  }

  return {
    message: "Product deleted successfully",
  };
};
