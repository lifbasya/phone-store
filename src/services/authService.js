import { pool } from "../config/db.js";
import { registerSchema } from "../validations/authValidations.js";
import validate from "../validations/validate.js";
import bcrypt from "bcrypt";

export const register = async (req) => {
  const validated = validate(registerSchema, req);
  const {
    fullname,
    username,
    email,
    role,
    address,
    password,
    phone_number,
    age,
  } = validated;

  const hashedPassword = bcrypt.hash(password, 10);

  const [users] = await pool.query(
    "INSERT INTO users (fullname, username, email, password, role, address, phone_number, age) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [fullname, username, email, hashedPassword, role, address, phone_number, age]
  );

  const newUser = {
    id: users.insertId,
    fullname,
    username,
    email,
    role,
    address,
    phone_number,
    age,
  };

  return newUser;
};
