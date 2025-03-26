import { TGetAllExpenseOfUserRequest } from "@domain/validations/expense/get-all-expense-of-user.validation";
import { TExpense } from "@infrastructure/models/expense.model";
import { TSplitExpense } from "@infrastructure/models/split-expense.model";

export type TGetAllExpenseOfUserRequestDto = TGetAllExpenseOfUserRequest;
export type TGetAllExpenseOfUserResponseDto = Array<TExpense & { splittedAmount?: TSplitExpense["amount"] }>