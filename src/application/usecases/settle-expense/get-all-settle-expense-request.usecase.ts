import { TGetAllSettleExpenseRequestRequestDto, TGetAllSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/get-all-settle-expense-request.dto";
import { ISettleExpenseRepository } from "@domain/repositories/settle-expense/settle-expense.repository";
import { getAllSettleExpenseRequestSchema } from "@domain/validations/settle-expense/get-all-settle-expense-request.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class GetAllSettleExpenseRequestUsecase {
    constructor(@inject(Types.SettleExpenseRepository) private readonly settleExpenseRepository: ISettleExpenseRepository) { }

    async getAllSettleExpenseRequest(input: TGetAllSettleExpenseRequestRequestDto): Promise<TGetAllSettleExpenseRequestResponseDto[]> {
        const parsedInput = getAllSettleExpenseRequestSchema.parse(input);
        return await this.settleExpenseRepository.getAllSettleExpenseRequest(parsedInput);
    }
}