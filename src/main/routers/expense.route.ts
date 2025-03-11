import { createExpense } from "@main/controllers/expense/expense.controller";
import { Router } from "express";

export const expenseRouter = Router();

expenseRouter.post("/", createExpense);