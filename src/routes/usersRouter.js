import express from "express";
import { getAllUsersHandler, getUsersByIdHandler } from "../handlers/usersHandler.js";

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)

export default usersRouter;