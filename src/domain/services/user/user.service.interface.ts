import { TCreateUserDto } from 'interface-adapters/dto/user';

export interface IUserDomainService {
 createUser(userData: TCreateUserDto): Promise<TCreateUserDto>
}
