import { Types } from '@shared/types';
import { ICreateUserRequestDto, ICreateUserResponseDto } from "@domain/dto/user/create-user.dto";
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { createUserSchema, TCreateUserRequest } from "@domain/validations/user/create-user.validation";
import { inject, injectable } from "inversify";

@injectable()
export class CreateUserUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepo: IUserRepository) { }

    async create(input: TCreateUserRequest): Promise<ICreateUserResponseDto> {
        const parsedInput = createUserSchema.parse(input);
        const createdUser = this.userRepo.create(parsedInput);
        return createdUser;
    }
}