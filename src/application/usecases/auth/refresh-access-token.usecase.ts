import { TRefreshAccessTokenRequestDto, TRefreshAccessTokenResponseDto } from "@domain/dto/auth/refresh-access-token.dto";
import { IAuthRepository } from "@domain/repositories/auth/auth.repository";
import { refreshAccessTokenSchema, TRefreshAccessTokenRequest } from "@domain/validations/auth/refresh-access-token.validation";
import { Types } from "@shared/types";
import { inject, injectable } from "inversify";

@injectable()
export class RefreshAccessTokenUsecase {
    constructor(@inject(Types.AuthRepository) private readonly authRepo: IAuthRepository) { }

    async create(input: TRefreshAccessTokenRequestDto): Promise<TRefreshAccessTokenResponseDto> {
        const parsedInput = refreshAccessTokenSchema.parse(input);
        const response = await this.authRepo.refreshAccessToken(parsedInput);
        return response
    }
}