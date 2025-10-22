import express from "express";
import { getAllUsersHandler, getUsersByIdHandler } from "../controllers/userController.js";


const usersRouter = express.Router();

usersRouter.get("/users", getAllUsersHandler);
usersRouter.get("/users/:id", getUsersByIdHandler)
// usersRouter.post("/users", addUsersHandler);
// usersRouter.put("/users/:id", updateUsersHandler);
// usersRouter.delete("/users/:id", deleteUsersHandler);

export default usersRouter;