// Mendapatkan semua pengguna

import { pool } from "../db.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const [users] = await pool.query("SELECT * FROM users");

    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getUsersByIdHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const [users] = await pool.query("SELECT * FROM users WHERE id=?", [id]);

    if (users.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });

      res.status(200).json({
      status: "success",
      data: users[0],
    });
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
