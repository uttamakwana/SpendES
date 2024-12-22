import { ICreateUserResponseDto } from './../../dto/user/create-user.dto';
import { ICreateUserRequestDto } from "@domain/dto/user/create-user.dto";

export interface IUserRepository {
    create(user: ICreateUserRequestDto): Promise<ICreateUserResponseDto>
}