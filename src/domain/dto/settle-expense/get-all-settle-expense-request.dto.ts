import { TGetAllSettleExpenseRequestRequest } from "@domain/validations/settle-expense/get-all-settle-expense-request.validation";
import { TSettleExpense } from "@infrastructure/models/settle-expense.model";

export type TGetAllSettleExpenseRequestRequestDto = TGetAllSettleExpenseRequestRequest;
export type TGetAllSettleExpenseRequestResponseDto = TSettleExpense;