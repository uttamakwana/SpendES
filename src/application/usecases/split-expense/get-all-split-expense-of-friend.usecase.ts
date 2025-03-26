import { TGetAllExpenseOfUserRequestDto, TGetAllExpenseOfUserResponseDto } from "@domain/dto/expense/get-all-expense-of-user.dto";
import { TGetAllSplitExpenseOfFriendRequestDto, TGetAllSplitExpenseOfFriendResponseDto } from "@domain/dto/split-expense/get-all-split-expense-of-friend.dto";
import { ISplitExpenseRepository } from "@domain/repositories/split-expense/split-expense.repository";
import { getAllExpenseOfUserSchema } from "@domain/validations/expense/get-all-expense-of-user.validation";
import { getAllSplitExpenseOfFriendSchema } from "@domain/validations/split-expense/get-all-split-expense-of-friend.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class GetAllSplitExpenseOfFriendUsecase {
    constructor(@inject(Types.SplitExpenseRepository) private readonly splitExpenseRepository: ISplitExpenseRepository) { }

    async getAllSplitExpenseOfFriend(input: TGetAllSplitExpenseOfFriendRequestDto): Promise<TGetAllSplitExpenseOfFriendResponseDto> {
        const parsedInput = getAllSplitExpenseOfFriendSchema.parse(input);
        return await this.splitExpenseRepository.getAllSplitExpenseOfFriend(parsedInput);
    }
}