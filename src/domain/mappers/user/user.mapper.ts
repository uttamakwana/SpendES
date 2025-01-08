import { injectable } from "inversify";
import { ICreateUserResponseDto } from "@domain/dto/user/create-user.dto";
import { IUserEntity } from "@domain/entities/user.entity";

@injectable()
export class UserMapper {
    toDto(entity: IUserEntity): ICreateUserResponseDto {
        return {
            id: entity.id.toString(),
            name: entity.name,
            email: entity.email,
            contact: entity.contact,
            avatar: entity.avatar || "",
            refreshToken: entity.refreshToken || "",
            isActive: entity.isActive,
            preferences: {
                reminder: entity.preferences?.reminder || null,
            },
            createdAt: entity.createdAt,
            updatedAt: entity.updatedAt,
        };
    }
}
