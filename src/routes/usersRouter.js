import express from "express";
import { addUserHandler, getAllUsersHandler, getUsersByIdHandler, updateUserHandler } from "../handlers/usersHandler.js";


const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)
usersRouter.post("/users", addUserHandler);
usersRouter.put("/users/:id", updateUserHandler);

export default usersRouter;