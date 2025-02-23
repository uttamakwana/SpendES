import { createExpense, getUserExpense } from "../controllers/expense.controller.js";
import { Router } from "express";

export const expenseRouter = Router();

expenseRouter.post("/", createExpense)
expenseRouter.get("/:id", getUserExpense)