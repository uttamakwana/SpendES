import { CreateExpenseUseCase } from "@application/usecases/expense/create-expense.usecase";
import { ExpenseMongodbRepository } from "@infrastructure/repositories/expense/expense.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";

const expenseRepository = new ExpenseMongodbRepository();

export const createExpense = asyncHandler(async (req, res) => {
    const createExpenseUsecase = new CreateExpenseUseCase(expenseRepository);

    const data = req.body;
    await createExpenseUsecase.createExpense(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Expense created successfully!" })
});