import { TSettleExpenseRequestDto, TSettleExpenseResponseDto } from "@domain/dto/settle-expense/settle-expense.dto";
import { ISettleExpenseRepository } from "@domain/repositories/settle-expense/settle-expense.repository";
import { settleExpenseSchema, TSettleExpenseRequest } from "@domain/validations/settle-expense/settle-expense.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class SettleExpenseUsecase {
    constructor(@inject(Types.SettleExpenseRepository) private readonly settleExpenseRepository: ISettleExpenseRepository) {}

    async settleExpenses(input: TSettleExpenseRequestDto): Promise<TSettleExpenseResponseDto> {
        const parsedInput = settleExpenseSchema.parse(input);
        await this.settleExpenseRepository.settleExpenses(parsedInput);
    }
}