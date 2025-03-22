import { TLoginUserRequest, TRegisterUserRequest } from "@domain/validations/user/user-auth.validation";

export type TRegisterUserRequestDto = TRegisterUserRequest;
export type TLoginUserRequestDto = TLoginUserRequest;

export type TRegisterUserResponseDto = {
    refreshToken: string;
    accessToken: string;
};
export type TLoginUserResponseDto = TRegisterUserResponseDto;