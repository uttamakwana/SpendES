import { Router } from "express";
import { userRouter } from "./user.router";

export const rootRouter = Router();

// health check route
rootRouter.get("/health", (req, res) => {
    res.send("API working successfully!");
})

// user router
rootRouter.use("/users", userRouter)