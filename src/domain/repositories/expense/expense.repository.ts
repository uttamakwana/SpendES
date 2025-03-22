import type { TCreateExpenseRequestDto, TCreateExpenseResponseDto } from "@domain/dto/expense/expense.dto";

export interface IExpenseRepository {
    createExpense(expenseData: TCreateExpenseRequestDto): Promise<TCreateExpenseResponseDto>
}