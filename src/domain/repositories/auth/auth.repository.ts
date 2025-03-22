import { TRefreshAccessTokenRequestDto, TRefreshAccessTokenResponseDto } from "@domain/dto/auth/refresh-access-token.dto";

export interface IAuthRepository {
    refreshAccessToken(refreshToken:TRefreshAccessTokenRequestDto) : Promise<TRefreshAccessTokenResponseDto>;
}