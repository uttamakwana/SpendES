import mongoose from "mongoose";
export declare const User: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    email: string;
    contact: number;
    pin: number;
    isActive: boolean;
    avatar?: string | null | undefined;
    refreshToken?: string | null | undefined;
    password?: string | null | undefined;
    preferences?: {
        reminder?: NativeDate | null | undefined;
    } | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=user.model.d.ts.map