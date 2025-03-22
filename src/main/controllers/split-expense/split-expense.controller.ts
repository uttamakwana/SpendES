import { CreateSplitExpenseUsecase } from "@application/usecases/split-expense/create-split-expense.usecase";
import { SplitExpenseMongodbRepository } from "@infrastructure/repositories/split-expense/split-expense.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";

const splitExpenseRepository = new SplitExpenseMongodbRepository();
export const createSplitExpense = asyncHandler(async (req, res) => {
    const createSplitExpenseUsecase = new CreateSplitExpenseUsecase(splitExpenseRepository);
    const data = {
        createdBy: req.userId,
        ...req.body
    }
    console.log({ data });
    await createSplitExpenseUsecase.createSplitExpense(data as any);
    res.status(STATUS_CODE.CREATED).json({ success: true, message: "Expense splitted successfully!" })
});