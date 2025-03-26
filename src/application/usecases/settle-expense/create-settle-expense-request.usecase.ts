import { TCreateSettleExpenseRequestRequestDto, TCreateSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/create-settle-expense-request.dto";
import { ISettleExpenseRepository } from "@domain/repositories/settle-expense/settle-expense.repository";
import { createSettleExpenseRequestSchema } from "@domain/validations/settle-expense/create-settle-expense-request.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class CreateSettleExpenseRequestUsecase {
    constructor(@inject(Types.SettleExpenseRepository) private readonly settleExpenseRepository: ISettleExpenseRepository) {}

    async createSettleExpenseRequest(input: TCreateSettleExpenseRequestRequestDto): Promise<TCreateSettleExpenseRequestResponseDto> {
        const parsedInput = createSettleExpenseRequestSchema.parse(input);
        await this.settleExpenseRepository.createSettleExpenseRequest(parsedInput);
    }
}