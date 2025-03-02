import { refreshToken } from "@main/controllers/auth/auth.controller";
import { Router } from "express";

export const authRouter = Router();

authRouter.get("/refresh", refreshToken);