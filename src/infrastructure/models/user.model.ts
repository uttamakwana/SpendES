import { USER_MODEL } from '@constants';
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
 }
 createdAt: Date;
 updatedAt: Date;
}

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Name is required!"],
  minLength: [2, "Name must be at least 2 characters!"],
  trim: true
 },
 email: {
  type: String,
  required: [true, "Email is required!"],
  unique: [true, "Email must be unique!"],
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
  trim: true,
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

export const UserModel = mongoose.model(USER_MODEL
 , UserSchema);
