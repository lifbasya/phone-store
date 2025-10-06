// Mendapatkan semua pengguna

import { pool } from "../config/db.js";

export const getAllUsersHandler = async (req, res) => {
  try {
    const [users] = await pool.query(
      "SELECT id, fullname, username, email, role, address, phone_number, age FROM users"
    );

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
    // Hanya memilih kolom yang diinginkan: fullname, username, email, role
    const [users] = await pool.query(
      "SELECT id, fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
      [id]
    );

    if (users.length === 0) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }

    // Mengembalikan data user yang ditemukan (users[0])
    res.status(200).json({
      status: "success",
      data: users[0],
    });
  } catch (error) {
    console.error(error);
    // Lebih baik mengirimkan respons error ke klien daripada hanya throw
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching the user data.",
    });
  }
};

export const addUsersHandler = async (req, res) => {
  const { fullname, username, email, password, role } = req.body;

  if (!fullname || !fullname.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Fullname is required",
    });
  }

  if (!username || !username.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Username is required",
    });
  }

  if (username.includes(" ")) {
    return res.status(400).json({
      status: "fail",
      message: "Username cannot contain spaces",
    });
  }

  if (!email || !email.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Email is required",
    });
  }

  if (!password || !password.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Password is required",
    });
  }

  if (!role || !role.trim()) {
    return res.status(400).json({
      status: "fail",
      message: "Role is required",
    });
  }
  try {
    const [users] = await pool.query(
      "INSERT INTO users (fullname, username, email, password, role) VALUES (?, ?, ?, ?, ?)",
      [fullname, username, email, password, role]
    );

    const newUser = {
      id: users.insertId,
      fullname,
      username,
      email,
      role,
    };

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: newUser,
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateUsersHandler = async (req, res) => {
  const { id } = req.params;
  const { fullname, username, email, role, address, phone_number, age } =
    req.body;
  try {
    await pool.query(
      "UPDATE users SET fullname=?, username=?, email=?, role=?, address=?, phone_number=?, age=? WHERE id=?",
      [fullname, username, email, role, address, phone_number, age, id]
    );

    const [userupdated] = await pool.query(
      "SELECT id, fullname, username, email, role, address, phone_number, age FROM users WHERE id=?",
      [id]
    );

    res.status(200).json({
      status: "success",
      message: "User updated successfully",
      data: userupdated[0],
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteUsersHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id=?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        status: "fail",
        message: "User not found",
      });
    }
    res.status(200).json({
      status: "success",
      message: "User deleted successfully",
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};