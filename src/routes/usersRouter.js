import express from "express";
import { addUserHandler, getAllUsersHandler, getUsersByIdHandler } from "../handlers/usersHandler.js";

const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)
usersRouter.post("/users", addUserHandler);

export default usersRouter;