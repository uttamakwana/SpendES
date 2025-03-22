import { USER_MODEL } from "@shared/constants/global.constant";
import mongoose, { Types } from "mongoose";

export type TUser = {
    _id: Types.ObjectId;
    name: string | undefined;
    email: string | undefined;
    contact: number;
    password: string | undefined;
    pin: number | undefined;
    avatar: string | undefined;
    isActive: boolean;
    isVerified: boolean;
    preferences: {
        reminder: Date;
    } | undefined,
    createdAt: Date;
    updatedAt: Date
}
type UserDocument = TUser & mongoose.Document;

const UserSchema = new mongoose.Schema<UserDocument>({
    name: {
        type: String,
        minLength: [2, "Name must be at least 2 characters!"],
        trim: true
    },
    email: String,
    contact: {
        type: Number,
        required: [true, "Contact is required!"],
        unique: [true, "Contact must be unique!"]
    },
    password: {
        type: String,
        minLength: [6, "Password must be at least 6 characters!"],
        maxLength: [20, "Password can't be greater than 20 characters!"],
        trim: true,
    },
    pin: {
        type: Number,
        length: 4,
    },
    avatar: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
    preferences: {
        reminder: Date
    }
}, { timestamps: true });

export const UserModel = mongoose.model(USER_MODEL
    , UserSchema);