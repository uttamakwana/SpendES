import { Router } from "express";
import { userRouter } from "./user.router";
import { authRouter } from "./auth.router";
import { expenseRouter } from "./expense.route";
import { splitExpensesRouter } from "./split-expense.route";
import { settleExpenseRouter } from "./settle-expense.route";

export const rootRouter = Router();

// health check route
rootRouter.get("/health", (req, res) => {
    res.send("API working successfully!");
})

// auth router
rootRouter.use("/auth", authRouter);
// user router
rootRouter.use("/users", userRouter)
// expense router
rootRouter.use("/expenses", expenseRouter);
// split-expense router
rootRouter.use("/split-expenses", splitExpensesRouter);
// split-expense router
rootRouter.use("/settle-expenses", settleExpenseRouter);