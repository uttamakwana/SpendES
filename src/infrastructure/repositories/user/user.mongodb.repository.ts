import { injectable } from "inversify";
import { ICreateUserRequestDto, ICreateUserResponseDto } from "@domain/dto/user/create-user.dto"
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { UserModel } from "@infrastructure/models/user.model";
import { ErrorHandler } from "@main/middlewares/error-handler.middleware";

@injectable()
export class UserMongodbRepository implements IUserRepository {
    async createUser(userData: ICreateUserRequestDto): Promise<ICreateUserResponseDto> {
        const user = await UserModel.findOne({ email: userData.email })
        if (user) {
            throw new ErrorHandler("User already exists!", "BAD_REQUEST");
        }
        const createdUser = await UserModel.create(userData);
        const { _id, name, email, contact, avatar, refreshToken, isActive, preferences, createdAt, updatedAt } = createdUser;

        return {
            id: _id.toString(),
            name,
            email,
            contact,
            avatar: avatar || "",
            refreshToken: refreshToken || "",
            isActive: isActive,
            preferences: {
                reminder: preferences?.reminder || null,
            },
            createdAt,
            updatedAt,
        };
    }
}