import { createSplitExpense } from "@main/controllers/split-expense/split-expense.controller";
import { authenticate } from "@main/middlewares/authenticate.middleware";
import { Router } from "express";

export const splitExpensesRouter = Router();

splitExpensesRouter.post("/", authenticate, createSplitExpense)

