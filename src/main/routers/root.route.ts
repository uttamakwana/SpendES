import { Router } from "express";
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";

export const rootRouter = Router();

// health check route
rootRouter.get("/health", (req, res) => {
    res.send("API working successfully!");
})

// auth router
rootRouter.use("/auth", authRouter);
// user router
rootRouter.use("/users", userRouter)