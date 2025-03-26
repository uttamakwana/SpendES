import { createSettleExpenseRequest, getAllSettleExpenseRequest, settleExpenses } from "@main/controllers/settle-expense/settle-expense.controller";
import { authenticate } from "@main/middlewares/authenticate.middleware";
import { Router } from "express";

export const settleExpenseRouter = Router();

settleExpenseRouter.get("/:friendId", authenticate, settleExpenses);
settleExpenseRouter.post("/", authenticate, createSettleExpenseRequest);
settleExpenseRouter.get("/", authenticate, getAllSettleExpenseRequest);