import type { TUserRepository, UserEntity } from '@domain/entities';
import { UserModel } from '@infrastructure/models';

export class UserMongoDBRepository implements TUserRepository {
 async create(user: UserEntity): Promise<UserEntity> {
  const createdUser = await UserModel.create(user);
  return rest.toObject();
 }
}
