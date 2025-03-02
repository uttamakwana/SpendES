import { IUserEntity } from "@domain/entities/user.entity"
import { TCreateUserRequest } from "@domain/validations/user/create-user.validation";


export type TVerifyAndCreateUserRequestDto = TCreateUserRequest;

export type TVerifyAndCreateUserResponseDto = void;