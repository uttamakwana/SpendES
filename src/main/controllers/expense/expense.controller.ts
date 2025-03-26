import { CreateExpenseUseCase } from "@application/usecases/expense/create-expense.usecase";
import { GetAllExpenseOfUserUsecase } from "@application/usecases/expense/get-all-expense-of-user.usecase";
import { TGetAllExpenseOfUserResponseDto } from "@domain/dto/expense/get-all-expense-of-user.dto";
import { ExpenseMongodbRepository } from "@infrastructure/repositories/expense/expense.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";

const expenseRepository = new ExpenseMongodbRepository();

export const createExpense = asyncHandler(async (req, res) => {
    const createExpenseUsecase = new CreateExpenseUseCase(expenseRepository);

    const data = req.body;
    data.createdBy = req.userId;
    await createExpenseUsecase.createExpense(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Expense created successfully!" })
});

export const getAllExpenseOfUser = asyncHandler<{ expenses: TGetAllExpenseOfUserResponseDto }>(async (req, res) => {
    const getAllExpenseOfUserUsecase = new GetAllExpenseOfUserUsecase(expenseRepository);

    const data = {
        id: req.userId
    } as any;
    const expenses = await getAllExpenseOfUserUsecase.getAllExpenseOfUser(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Expense retrieved successfully!", data: { expenses } })
})