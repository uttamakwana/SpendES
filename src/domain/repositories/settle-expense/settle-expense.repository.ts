import { TCreateSettleExpenseRequestRequestDto, TCreateSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/create-settle-expense-request.dto";
import { TGetAllSettleExpenseRequestRequestDto, TGetAllSettleExpenseRequestResponseDto } from "@domain/dto/settle-expense/get-all-settle-expense-request.dto";
import { TSettleExpenseRequestDto, TSettleExpenseResponseDto } from "@domain/dto/settle-expense/settle-expense.dto";

export interface ISettleExpenseRepository {
    createSettleExpenseRequest(data: TCreateSettleExpenseRequestRequestDto): Promise<TCreateSettleExpenseRequestResponseDto>;
    getAllSettleExpenseRequest(data: TGetAllSettleExpenseRequestRequestDto): Promise<TGetAllSettleExpenseRequestResponseDto[]>
    settleExpenses(data: TSettleExpenseRequestDto): Promise<TSettleExpenseResponseDto>
}