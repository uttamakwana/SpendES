import { TCreateSplitExpenseRequestDto, TCreateSplitExpenseResponseDto } from "@domain/dto/split-expense/create-split-expense.dto";
import { TGetAllSplitExpenseOfFriendRequestDto, TGetAllSplitExpenseOfFriendResponseDto } from "@domain/dto/split-expense/get-all-split-expense-of-friend.dto";
import { ISplitExpenseRepository } from "@domain/repositories/split-expense/split-expense.repository";
import { ExpenseModel } from "@infrastructure/models/expense.model";
import { SplitExpenseModel } from "@infrastructure/models/split-expense.model";
import { UserModel } from "@infrastructure/models/user.model";
import { STATUS_CODE } from "@shared/config/http.config";
import { customAssert } from "@shared/utils/custom-assert.util";
import { injectable } from "inversify";

@injectable()
export class SplitExpenseMongodbRepository implements ISplitExpenseRepository {
    async createSplitExpense(expenseData: TCreateSplitExpenseRequestDto): Promise<TCreateSplitExpenseResponseDto> {
        const { amount, description, category, splits, createdBy } = expenseData;
        // create expense
        const expense = await ExpenseModel.create({ amount, description, category, createdBy, isSplitted: true });

        // check current user id exist inside the splits
        // const isCurrentUserIdNotInSplits = splits.findIndex(split => split.userId.toString() === createdBy.toString()) === -1;
        // customAssert(isCurrentUserIdNotInSplits, STATUS_CODE.BAD_REQUEST, "Invalid user id!");

        // check all user in splits exists or not
        const userIds = splits.map((split) => split.userId);
        const foundedUsers = await UserModel.find({ _id: { $in: userIds } });
        const isAllUserFoundedInDatabase = foundedUsers.length === splits.length;
        customAssert(isAllUserFoundedInDatabase, STATUS_CODE.BAD_REQUEST, "Invalid user ids!");

        // with expenseId and user's splitted data create individual splitted expense
        splits.forEach(async (split) => {
            await SplitExpenseModel.create({ createdBy, amount: split.amount, description: split.description, splittedFor: split.userId, expenseId: expense._id })
        })
    }

    async getAllSplitExpenseOfFriend(data: TGetAllSplitExpenseOfFriendRequestDto): Promise<TGetAllSplitExpenseOfFriendResponseDto> {
        const { friendId, userId } = data;

        // Check if friend exists
        const friend = await UserModel.findById(friendId);
        customAssert(friend, STATUS_CODE.BAD_REQUEST, "Friend does not exist");

        // Fetch all expenses where either user is the creator
        const expenses = await ExpenseModel.find({
            createdBy: { $in: [friendId, userId] },
            isSplitted: true,
        });

        // Fetch all split expenses where either user is involved
        const splitExpenses = await SplitExpenseModel.find({
            $or: [
                { createdBy: friendId, splittedFor: userId },
                { createdBy: userId, splittedFor: friendId },
            ],
        });

        // Convert split expenses into maps for O(1) lookup
        const splitExpenseMap = new Map<string, { amount: number; description: string, isSettled: boolean; }>();
        splitExpenses.forEach(split => {
            splitExpenseMap.set(split.expenseId.toString(), { amount: split.amount, description: split.description, isSettled: split.isSettled });
        });

        // Transform expenses into the required format
        const responseData = expenses.map(expense => {
            const { _id, amount, description, category, createdAt, updatedAt, createdBy } = expense;
            const splitData = splitExpenseMap.get(_id.toString()) || { amount: 0, description: "", isSettled: false };

            return {
                _id,
                amount,
                description,
                category,
                createdAt,
                updatedAt,
                splittedAmount: splitData.amount,
                splittedDescription: splitData.description,
                splittedIsSettled: splitData.isSettled,
                isCreatedByYou: createdBy.toString() === userId,
            };
        });

        // Sort by createdAt in descending order
        const sortedData = responseData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
        return sortedData;
    }

}