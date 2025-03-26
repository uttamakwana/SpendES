import type { TCreateExpenseRequestDto, TCreateExpenseResponseDto } from "@domain/dto/expense/expense.dto";
import { TGetAllExpenseOfUserRequestDto, TGetAllExpenseOfUserResponseDto } from "@domain/dto/expense/get-all-expense-of-user.dto";

export interface IExpenseRepository {
    createExpense(expenseData: TCreateExpenseRequestDto): Promise<TCreateExpenseResponseDto>
    getAllExpenseOfUser(expenseDataOfUser: TGetAllExpenseOfUserRequestDto): Promise<TGetAllExpenseOfUserResponseDto>
}