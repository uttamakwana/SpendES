import { TGetAllExpenseOfUserRequestDto, TGetAllExpenseOfUserResponseDto } from "@domain/dto/expense/get-all-expense-of-user.dto";
import { IExpenseRepository } from "@domain/repositories/expense/expense.repository";
import { getAllExpenseOfUserSchema } from "@domain/validations/expense/get-all-expense-of-user.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class GetAllExpenseOfUserUsecase {
    constructor(@inject(Types.ExpenseRespository) private readonly expenseRepository: IExpenseRepository) { }

    async getAllExpenseOfUser(input: TGetAllExpenseOfUserRequestDto): Promise<TGetAllExpenseOfUserResponseDto> {
        const parsedInput = getAllExpenseOfUserSchema.parse(input);
        return await this.expenseRepository.getAllExpenseOfUser(parsedInput);
    }
}