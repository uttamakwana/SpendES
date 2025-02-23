import { Expense } from "../models/expense.model.js";
import { asyncHandler } from "../utils/async-handler.util.js";
import { createExpenseRequestSchema } from "../validations/expense.validdation.js";

export const createExpense = asyncHandler(async (req, res) => {
    const validatedReqBody = createExpenseRequestSchema.parse(req.body);

    const { amount, description, createdBy } = validatedReqBody;
    const expense = await Expense.create({ amount, description, createdBy });

    res.status(200).json({ success: true, data: { expense }})
})

export const getUserExpense = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const expenses = await Expense.find({ createdBy: String(id) })

    res.status(200).json({ success: true, data: { expenses }})
})

