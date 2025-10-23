import express from "express";
import { createUserhandler, deleteUserHandler, getAllUsersHandler, getUsersByIdHandler, updateUserHandler } from "../controllers/userController.js";


const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)
usersRouter.post("/users", createUserhandler);
usersRouter.put("/users/:id", updateUserHandler);
usersRouter.delete("/users/:id", deleteUserHandler);

export default usersRouter;