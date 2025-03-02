import { Types } from '@shared/types';
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { createUserSchema, TCreateUserRequest } from "@domain/validations/user/create-user.validation";
import { inject, injectable } from "inversify";
import { TVerifyAndCreateUserResponseDto } from '@domain/dto/user/create-user.dto';

@injectable()
export class CreateUserUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepo: IUserRepository) { }

    async verifyAndCreateUser(input: TCreateUserRequest): Promise<TVerifyAndCreateUserResponseDto> {
        const parsedInput = createUserSchema.parse(input);
        await this.userRepo.verifyAndCreateUser(parsedInput);
    }
}