import mongoose from "mongoose";
type TUserModal = mongoose.Document & {
    name: string;
    email: string;
    contact: string;
    password: string;
    pin: string;
    avatar: string;
    refreshToken: string;
    isActive: boolean;
    preferences: {
        reminder: Date;
    };
    createdAt: Date;
    updatedAt: Date;
};
export declare const UserModel: mongoose.Model<TUserModal, {}, {}, {}, mongoose.Document<unknown, {}, TUserModal> & mongoose.Document<unknown, any, any> & {
    name: string;
    email: string;
    contact: string;
    password: string;
    pin: string;
    avatar: string;
    refreshToken: string;
    isActive: boolean;
    preferences: {
        reminder: Date;
    };
    createdAt: Date;
    updatedAt: Date;
} & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>;
export {};
//# sourceMappingURL=user.model.d.ts.map