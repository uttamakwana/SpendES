import { TGetAllSplitExpenseOfFriendRequest } from "@domain/validations/split-expense/get-all-split-expense-of-friend.validation";
import { TExpense } from "@infrastructure/models/expense.model";
import { TSplitExpense } from "@infrastructure/models/split-expense.model";

export type TGetAllSplitExpenseOfFriendRequestDto = TGetAllSplitExpenseOfFriendRequest;
export type TGetAllSplitExpenseOfFriendResponseDto = {
    _id: TExpense["_id"],
    amount: TExpense["amount"],
    description: TExpense["description"],
    category: TExpense["category"],
    createdAt: TExpense["createdAt"],
    updatedAt: TExpense["updatedAt"],
    isCreatedByYou: boolean;
    splittedAmount: TSplitExpense["amount"],
    splittedDescription?: TSplitExpense["description"],
    splittedIsSettled?: TSplitExpense["isSettled"]
}[]