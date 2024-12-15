import { IUserDomainService } from '@domain/services/user';
import { TYPES } from '@infrastructure/configs/type';
import { TCreateUserDto } from 'interface-adapters/dto/user';
import { inject } from 'inversify';
import { httpPost, requestBody } from 'inversify-express-utils';

export class UserController {
 constructor(
  @inject(TYPES.UserDomainService)
  private _userDomainService: IUserDomainService) { }

 @httpPost("/")
 async createUser(
  @requestBody() userData: TCreateUserDto
 ) {
  this._userDomainService.createUser(userData);
 }
};
