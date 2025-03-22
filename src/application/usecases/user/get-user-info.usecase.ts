import { TGetUserInfoRequestDto, TGetUserInfoResponseDto } from "@domain/dto/user/get-user-info.dto";
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { getUserInfoSchema, TGetUserInfoRequest } from "@domain/validations/user/get-user-info.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class GetUserInfoUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepository: IUserRepository) { }

    async getUserInfo(input: TGetUserInfoRequestDto): Promise<TGetUserInfoResponseDto> {
        const parsedInput = getUserInfoSchema.parse(input);
        return await this.userRepository.getUserInfo(parsedInput);
    }
}