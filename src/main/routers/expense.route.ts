import { createExpense, getAllExpenseOfUser } from "@main/controllers/expense/expense.controller";
import { authenticate } from "@main/middlewares/authenticate.middleware";
import { Router } from "express";

export const expenseRouter = Router();

expenseRouter.post("/", authenticate, createExpense);
expenseRouter.get("/", authenticate, getAllExpenseOfUser);