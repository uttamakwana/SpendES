import { TLoginUserRequestDto, TLoginUserResponseDto, TRegisterUserRequestDto, TRegisterUserResponseDto } from "@domain/dto/user/user-auth.dto";
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { loginUserSchema, registerUserSchema } from "@domain/validations/user/user-auth.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class UserAuthUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepository: IUserRepository) { }

    async login(input: TLoginUserRequestDto): Promise<TLoginUserResponseDto> {
        const parsedInput = loginUserSchema.parse(input);
        const response = await this.userRepository.loginUser(parsedInput);
        return response;
    }
    async register(input: TRegisterUserRequestDto): Promise<TRegisterUserResponseDto> {
        const parsedInput = registerUserSchema.parse(input);
        const response = await this.userRepository.registerUser(parsedInput);
        return response;
    }
}