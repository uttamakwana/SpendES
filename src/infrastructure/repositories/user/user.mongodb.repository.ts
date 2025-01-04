import { injectable } from "inversify";
import { ICreateUserRequestDto, ICreateUserResponseDto } from "@domain/dto/user/create-user.dto"
import { IUserRepository } from "@domain/repositories/user/user.repository";
import { UserModel } from "@infrastructure/models/user.model";
import { ErrorHandler } from "@main/middlewares/error-handler.middleware";

@injectable()
export class UserMongodbRepository implements IUserRepository {
    async create(data: ICreateUserRequestDto): Promise<ICreateUserResponseDto> {
        const user = await UserModel.findOne({ email: data.email })
        if (user) {
            throw new ErrorHandler("User already exists!", "BAD_REQUEST");
        }
        const createdUser = await UserModel.create(data);

        return {
            id: createdUser._id.toString(),
            name: createdUser.name,
            email: createdUser.email,
            contact: createdUser.contact,
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