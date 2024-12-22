import { IUserEntity } from "@domain/entities/user.entity"
import { TCreateUserRequest } from "@domain/validations/user/create-user.validation";


export interface ICreateUserRequestDto extends TCreateUserRequest { };

export type ICreateUserResponseDto = IUserEntity;