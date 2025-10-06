import { pool } from "../config/db.js";

export const getAllProductsHandler = async (req, res) => {
  try {
    const [products] = await pool.query(
      "SELECT * FROM products"
    );

    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getProductsByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const [products] = await pool.query(
      "SELECT * FROM products WHERE id=?",
      [id]
    );

    if (products.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: products[0],
    });
  } catch (error) {
    console.error(error);
    // Lebih baik mengirimkan respons error ke klien daripada hanya throw
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the product data.",
    });
  }
};

export const addProductsHandler = async (req, res) => {
  const { user_id, name, description, price, stock } = req.body;

  try {
    const [products] = await pool.query(
            // UBAH KEMBALI nama kolom di SQL query menjadi 'description'
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

    res.status(201).json({
      status: "success",
      message: "product created successfully",
      data: newProduct,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateProductsHandler = async (req, res) => {
  const { id } = req.params;
  const { user_id, name, description, price, stock } = req.body;
  try {
    await pool.query(
      "UPDATE products SET user_id=?, name=?, description=?, price=?, stock=? WHERE id=?",
      [user_id, name, description, price, stock, id]
    );

    const [productupdated] = await pool.query(
      "SELECT id, user_id, name, description, price, stock FROM products WHERE id=?",
      [id]
    );

    res.status(200).json({
      status: "success",
      message: "Product updated successfully",
      data: productupdated[0],
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteProductsHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM products WHERE id=?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "Product not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
