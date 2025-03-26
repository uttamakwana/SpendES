import { TCreateSettleExpenseRequestRequestDto, TCreateSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/create-settle-expense-request.dto";
import { TGetAllSettleExpenseRequestRequestDto, TGetAllSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/get-all-settle-expense-request.dto";
import { TSettleExpenseRequestDto, TSettleExpenseResponseDto } from "@domain/dto/settle-expense/settle-expense.dto";
import { ISettleExpenseRepository } from "@domain/repositories/settle-expense/settle-expense.repository";
import { SettleExpenseModel } from "@infrastructure/models/settle-expense.model";
import { SplitExpenseModel } from "@infrastructure/models/split-expense.model";
import { UserModel } from "@infrastructure/models/user.model";
import { STATUS_CODE } from "@shared/config/http.config";
import { customAssert } from "@shared/utils/custom-assert.util";

export class SettleExpenseMongodbRepository implements ISettleExpenseRepository {
    async createSettleExpenseRequest(data: TCreateSettleExpenseRequestRequestDto): Promise<TCreateSettleExpenseRequestResponseDto> {
        const { userId, friendId, amount, expenseId } = data;
        // check if friend exist or not
        const friend = await UserModel.findById(friendId);
        customAssert(friend, STATUS_CODE.BAD_REQUEST, "Invalid user!");

        const isRequestAlreadyThere = await SettleExpenseModel.findOne({ createdBy: userId, createdFor: friendId, expenseId });
        customAssert(!isRequestAlreadyThere, STATUS_CODE.BAD_REQUEST, "Settle request is already sent!");

        await SettleExpenseModel.create({ createdBy: userId, createdFor: friendId, amount, expenseId });
    }

    async getAllSettleExpenseRequest(data: TGetAllSettleExpenseRequestRequestDto): Promise<TGetAllSettleExpenseRequestResponseDto[]> {
        const { userId } = data;
        const settleExpenseRequests = await SettleExpenseModel.find({ $or: [{ createdBy: userId }, { createdFor: userId }] }).lean<TGetAllSettleExpenseRequestResponseDto[]>();

        return settleExpenseRequests;
    }

    async settleExpenses(data: TSettleExpenseRequestDto): Promise<TSettleExpenseResponseDto> {
        const { friendId, userId } = data;
        // check if friend exist or not
        const friend = await UserModel.findById(friendId);
        customAssert(friend, STATUS_CODE.BAD_REQUEST, "Invalid user!");

        await SplitExpenseModel.updateMany({ $or: [{ createdBy: userId, splittedFor: friendId }, { createdBy: friendId, splittedFor: userId }] }, { $set: { isSettled: true } });
    }
}