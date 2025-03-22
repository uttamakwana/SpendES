import { TCreateSplitExpenseRequestDto, TCreateSplitExpenseResponseDto } from "@domain/dto/split-expense/create-split-expense.dto";
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
}