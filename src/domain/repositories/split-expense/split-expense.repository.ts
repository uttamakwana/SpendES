import { TCreateSplitExpenseRequestDto, TCreateSplitExpenseResponseDto } from "@domain/dto/split-expense/create-split-expense.dto";

export interface ISplitExpenseRepository {
    createSplitExpense(expenseData: TCreateSplitExpenseRequestDto): Promise<TCreateSplitExpenseResponseDto>;
}