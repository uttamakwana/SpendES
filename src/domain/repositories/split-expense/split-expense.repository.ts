import { TCreateSplitExpenseRequestDto, TCreateSplitExpenseResponseDto } from "@domain/dto/split-expense/create-split-expense.dto";
import { TGetAllSplitExpenseOfFriendRequestDto, TGetAllSplitExpenseOfFriendResponseDto } from "@domain/dto/split-expense/get-all-split-expense-of-friend.dto";

export interface ISplitExpenseRepository {
    createSplitExpense(expenseData: TCreateSplitExpenseRequestDto): Promise<TCreateSplitExpenseResponseDto>;
    getAllSplitExpenseOfFriend(data: TGetAllSplitExpenseOfFriendRequestDto): Promise<TGetAllSplitExpenseOfFriendResponseDto>;
}