import { CreateSettleExpenseRequestUsecase } from "@application/usecases/settle-expense/create-settle-expense-request.usecase";
import { GetAllSettleExpenseRequestUsecase } from "@application/usecases/settle-expense/get-all-settle-expense-request.usecase";
import { SettleExpenseUsecase } from "@application/usecases/settle-expense/settle-expense.usecase";
import { TGetAllSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/get-all-settle-expense-request.dto";
import { SettleExpenseModel } from "@infrastructure/models/settle-expense.model";
import { SettleExpenseMongodbRepository } from "@infrastructure/repositories/settle-expense/settle-expense.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";

const settleExpenseRepository = new SettleExpenseMongodbRepository();

export const createSettleExpenseRequest = asyncHandler(async (req, res) => {
    const createSettleExpenseRequestUsecase = new CreateSettleExpenseRequestUsecase(settleExpenseRepository);
    const data = {
        friendId: req.body.friendId.toString(),
        userId: req.userId.toString(),
        amount: req.body.amount,
        expenseId: req.body.expenseId?.toString()
    }

    await createSettleExpenseRequestUsecase.createSettleExpenseRequest(data);
    res.status(STATUS_CODE.CREATED).json({ success: true, message: "Settle expense request generated!" });
})

export const getAllSettleExpenseRequest = asyncHandler<{ settleExpenseRequests: TGetAllSettleExpenseRequestResponseDto[] }>(async (req, res) => {
    const getAllSettleExpenseRequestUsecase = new GetAllSettleExpenseRequestUsecase(settleExpenseRepository);
    const data = {
        userId: req.userId.toString()
    }
    const response = await getAllSettleExpenseRequestUsecase.getAllSettleExpenseRequest(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Settle expense retrived successfully!", data: { settleExpenseRequests: response } })
})

export const settleExpenses = asyncHandler(async (req, res) => {
    const settleExpenseUsecase = new SettleExpenseUsecase(settleExpenseRepository);
    const data = {
        friendId: req.params.friendId.toString(),
        userId: req.userId.toString()
    }

    await settleExpenseUsecase.settleExpenses(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Expense settled successfully!" })
})

