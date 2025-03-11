import { TCreateExpenseRequestDto, TCreateExpenseResponseDto } from "@domain/dto/expense/expense.dto";
import { IExpenseRepository } from "@domain/repositories/expense/expense.repository";
import { ExpenseModel } from "@infrastructure/models/expense.model";
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
}