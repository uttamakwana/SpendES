import { Router } from "express";
import { userRouter } from "./user.router.js";
import { expenseRouter } from "./expense.router.js";

export const rootRouter = Router();

// protected routes
rootRouter.use("/users", userRouter);
rootRouter.use("/expenses", expenseRouter);