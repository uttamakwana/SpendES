import { TCreateSplitExpenseRequestDto, TCreateSplitExpenseResponseDto } from "@domain/dto/split-expense/create-split-expense.dto";
import { ISplitExpenseRepository } from "@domain/repositories/split-expense/split-expense.repository";
import { createSplitExpenseSchema } from "@domain/validations/split-expense/create-split-expense.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class CreateSplitExpenseUsecase {
    constructor(@inject(Types.SplitExpenseRepository) private readonly splitExpenseRepository: ISplitExpenseRepository) { }

    async createSplitExpense(input: TCreateSplitExpenseRequestDto): Promise<TCreateSplitExpenseResponseDto> {
        const parsedInput = createSplitExpenseSchema.parse(input);
        await this.splitExpenseRepository.createSplitExpense(parsedInput);
    }
}