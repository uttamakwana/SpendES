import { UserModel } from 'data/models/user';
import { TCreateUserDto } from 'interface-adapters/dto/user';
import { injectable } from 'inversify';

@injectable()
export class UserRepository {
 async findByEmail(email: string) {
  return UserModel.findOne({ email })
 }

 async create(userData: TCreateUserDto) {
  return UserModel.create(userData);
 }
}
