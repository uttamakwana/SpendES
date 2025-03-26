import { CreateSplitExpenseUsecase } from "@application/usecases/split-expense/create-split-expense.usecase";
import { GetAllSplitExpenseOfFriendUsecase } from "@application/usecases/split-expense/get-all-split-expense-of-friend.usecase";
import { TGetAllSplitExpenseOfFriendResponseDto } from "@domain/dto/split-expense/get-all-split-expense-of-friend.dto";
import { SplitExpenseMongodbRepository } from "@infrastructure/repositories/split-expense/split-expense.mongodb.repository";
import { STATUS_CODE } from "@shared/config/http.config";
import { asyncHandler } from "@shared/utils/async-handler.util";
import { Types } from "mongoose";

const splitExpenseRepository = new SplitExpenseMongodbRepository();
export const createSplitExpense = asyncHandler(async (req, res) => {
    const createSplitExpenseUsecase = new CreateSplitExpenseUsecase(splitExpenseRepository);
    const data = {
        createdBy: req.userId,
        ...req.body
    }
    await createSplitExpenseUsecase.createSplitExpense(data as any);
    res.status(STATUS_CODE.CREATED).json({ success: true, message: "Expense splitted successfully!" })
});

export const getAllSplitExpenseOfFriend = asyncHandler<{ expenses: TGetAllSplitExpenseOfFriendResponseDto }>(async (req, res) => {
    const getAllSplitExpenseOfFriendUsecase = new GetAllSplitExpenseOfFriendUsecase(splitExpenseRepository);
    const data = {
        friendId: req.params.friendId.toString(),
        userId: req.userId.toString()
    };
    const expenses = await getAllSplitExpenseOfFriendUsecase.getAllSplitExpenseOfFriend(data);
    res.status(STATUS_CODE.OK).json({ success: true, message: "Expense retrived successfully!", data: { expenses } })
})