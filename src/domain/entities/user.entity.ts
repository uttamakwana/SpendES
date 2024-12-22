import { Entity } from "@domain/interfaces/entity";

export interface IUserPreferences {
    reminder: Date | null;
}

export interface IUserEntity {
    id: string;
    name: string;
    email: string;
    contact: number;
    password: string;
    pin: number;
    avatar: string;
    refreshToken: string;
    isActive: boolean;
    preferences: IUserPreferences;
    createdAt: Date;
    updatedAt: Date;
}

export class UserEntity extends Entity<IUserEntity> {
    // Getters for the UserEntity properties
    get id(): IUserEntity["id"] {
        return this.props.id;
    }

    get email(): IUserEntity["email"] {
        return this.props.email;
    }

    get contact(): IUserEntity["contact"] {
        return this.props.contact;
    }

    get password(): IUserEntity["password"] {
        return this.props.password;
    }

    get pin(): IUserEntity["pin"] {
        return this.props.pin;
    }

    get avatar(): IUserEntity["avatar"] {
        return this.props.avatar;
    }

    get refreshToken(): IUserEntity["refreshToken"] {
        return this.props.refreshToken;
    }

    get isActive(): IUserEntity["isActive"] {
        return this.props.isActive;
    }

    get preferences(): IUserEntity["preferences"] {
        return this.props.preferences;
    }

    get createdAt(): IUserEntity["createdAt"] {
        return this.props.createdAt;
    }

    get updatedAt(): IUserEntity["updatedAt"] {
        return this.props.updatedAt;
    }
}
