import express from "express";
import { addUsersHandler, deleteUsersHandler, getAllUsersHandler, getUsersByIdHandler, updateUsersHandler } from "../handlers/usersHandler.js";


const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)
usersRouter.post("/users", addUsersHandler);
usersRouter.put("/users/:id", updateUsersHandler);
usersRouter.delete("/users/:id", deleteUsersHandler);

export default usersRouter;