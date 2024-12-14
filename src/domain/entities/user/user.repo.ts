import type { UserEntity } from './user.entity.js'

export type TUserRepository = {
 create(user: UserEntity): Promise<UserEntity>
}
