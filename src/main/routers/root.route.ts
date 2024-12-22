import { createUser } from "@main/controllers/user/user.controller";
import { Router } from "express";

export const rootRouter = Router();

rootRouter.post("/user", createUser)