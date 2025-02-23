import { createUser } from "../controllers/user.controller.js";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/", createUser)