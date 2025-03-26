import { TCreateExpenseRequestDto, TCreateExpenseResponseDto } from "@domain/dto/expense/expense.dto";
import { TGetAllExpenseOfUserRequestDto, TGetAllExpenseOfUserResponseDto } from "@domain/dto/expense/get-all-expense-of-user.dto";
import { IExpenseRepository } from "@domain/repositories/expense/expense.repository";
import { ExpenseModel, TExpense } from "@infrastructure/models/expense.model";
import { SplitExpenseModel, TSplitExpense } from "@infrastructure/models/split-expense.model";
import { UserModel } from "@infrastructure/models/user.model";
import { STATUS_CODE } from "@shared/config/http.config";
import { customAssert } from "@shared/utils/custom-assert.util";

export class ExpenseMongodbRepository implements IExpenseRepository {
    async createExpense(expenseData: TCreateExpenseRequestDto): Promise<TCreateExpenseResponseDto> {
        // check if user exist or not
        const user = await UserModel.findById(expenseData.createdBy);
        customAssert(user, STATUS_CODE.BAD_REQUEST, "Invalid user!");

        // create a new expense for that user
        await ExpenseModel.create(expenseData);
    }

    async getAllExpenseOfUser(expenseDataOfUser: TGetAllExpenseOfUserRequestDto): Promise<TGetAllExpenseOfUserResponseDto> {
        // check if user exist or not
        const user = await UserModel.findById(expenseDataOfUser.id);
        customAssert(user, STATUS_CODE.BAD_REQUEST, "Invalid user!");
        const userId = user._id
        const personalExpenses = await ExpenseModel.find({
            createdBy: userId,
        }).lean<TExpense[]>();

        const splittedExpenses = await SplitExpenseModel.find({
            createdBy: userId,
            splittedFor: userId
        }).lean<TSplitExpense[]>();

        const data = personalExpenses.map(personalExpense => {
            if (!personalExpense.isSplitted) return personalExpense;
            const expenseId = personalExpense._id;
            console.log({ expenseId });
            const splittedExpense = splittedExpenses.find(splittedExpense => splittedExpense.expenseId.toString() === expenseId.toString());
            console.log({ splittedExpense })
            return { ...personalExpense, splittedAmount: splittedExpense?.amount || 0 }
        });

        return data
    }
}   