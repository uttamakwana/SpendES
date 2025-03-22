import { checkContacts, getUserInfo, login, register, sendOtp, updateUserInfo, verifyAndCreateUser } from "@main/controllers/user/user.controller";
import { authenticate } from "@main/middlewares/authenticate.middleware";
import { Router } from "express";

export const userRouter = Router();

userRouter.post("/send-otp", sendOtp);
userRouter.post("/verify-otp", verifyAndCreateUser);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/:id", authenticate, getUserInfo);
userRouter.patch("/", authenticate, updateUserInfo);
userRouter.post("/check-contacts", authenticate, checkContacts);