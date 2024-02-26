import { Router } from "express";
import userController from "./users/users.controller";

const accountsControllers = Router();

accountsControllers.use("/users", userController);

export default accountsControllers;
