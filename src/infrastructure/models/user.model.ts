import { USER_MODEL } from "@shared/constants/global.constant";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
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