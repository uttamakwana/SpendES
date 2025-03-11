import { TCreateExpenseRequestDto, TCreateExpenseResponseDto } from "@domain/dto/expense/expense.dto";
import { IExpenseRepository } from "@domain/repositories/expense/expense.repository";
import { createExpenseSchema } from "@domain/validations/expense/expense.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class CreateExpenseUseCase {
    constructor(@inject(Types.ExpenseRespository) private readonly expenseRepo: IExpenseRepository) { }

    async createExpense(input: TCreateExpenseRequestDto): Promise<TCreateExpenseResponseDto> {
        const parsedInput = createExpenseSchema.parse(input);
        await this.expenseRepo.createExpense(parsedInput);
    }
}