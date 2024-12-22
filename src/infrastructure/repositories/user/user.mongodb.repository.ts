import { ICreateUserRequestDto, ICreateUserResponseDto } from "@domain/dto/user/create-user.dto"
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { UserModel } from "@infrastructure/models/user.model";

export class UserMongodbRepository implements IUserRepository {
    async create(user: ICreateUserRequestDto): Promise<ICreateUserResponseDto> {
        const createdUser = await UserModel.create(user);

        return {
            id: createdUser._id.toString(),
            name: createdUser.name,
            email: createdUser.email,
            contact: createdUser.contact,
            password: createdUser.password,
            pin: createdUser.pin,
            avatar: createdUser.avatar || "",
            refreshToken: createdUser.refreshToken || "",
            isActive: createdUser.isActive,
            preferences: {
                reminder: createdUser.preferences?.reminder || null,
            },
            createdAt: createdUser.createdAt,
            updatedAt: createdUser.updatedAt,
        };

    }
}