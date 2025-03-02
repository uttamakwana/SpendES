import { login, register, sendOtp, verifyAndCreateUser } from "@main/controllers/user/user.controller";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/send-otp", sendOtp);
userRouter.post("/verify-otp", verifyAndCreateUser);
userRouter.post("/register", register);
userRouter.post("/login", login);