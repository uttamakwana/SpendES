import { TUpdateUserInfoRequestDto, TUpdateUserInfoResponseDto } from "@domain/dto/user/update-user-info.dto";
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { updateUserInfoSchema } from "@domain/validations/user/update-user-info.validation";
import { Types } from "@shared/types";
import { inject } from "inversify";

export class UpdateUserInfoUsecase {
    constructor(@inject(Types.UserRepository) private readonly userRepository: IUserRepository) { }

    async updateUserInfo(input: TUpdateUserInfoRequestDto): Promise<TUpdateUserInfoResponseDto> {
        const parsedInput = updateUserInfoSchema.parse(input);
        return await this.userRepository.updateUserInfo(parsedInput);
    }
}