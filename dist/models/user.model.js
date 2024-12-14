import { USER_MODEL } from '@constants';
import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"]
    },
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: [true, "Email must be unique!"]
    },
    contact: {
        type: Number,
        required: [true, "Contact is required!"],
        unique: [true, "Contact must be unique!"]
    },
    password: {
        type: String,
        // required: [true, "Password is required!"],
        minLength: [6, "Password must be at least 6 characters!"],
        maxLength: [20, "Password can't be greater than 20 characters!"],
    },
    pin: {
        type: Number,
        required: [true, "Pin is required!"],
        length: 4,
    },
    avatar: String,
    refreshToken: String,
    isActive: {
        type: Boolean,
        default: true,
    },
    preferences: {
        reminder: Date
    }
}, { timestamps: true });
export const User = mongoose.model(USER_MODEL, UserSchema);
//# sourceMappingURL=user.model.js.map