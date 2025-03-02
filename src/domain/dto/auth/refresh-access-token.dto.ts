import { TRefreshAccessTokenRequest } from "@domain/validations/auth/refresh-access-token.validation";

export type TRefreshAccessTokenRequestDto = TRefreshAccessTokenRequest
export type TRefreshAccessTokenResponseDto = {
    newAccessToken:string;
    newRefreshToken:string;
}