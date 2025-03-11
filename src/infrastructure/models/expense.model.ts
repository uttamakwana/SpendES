import mongoose from "mongoose";
import { EXPENSE_MODEL, REF_ID, USER_MODEL } from "@shared/constants/global.constant.js";
import { CategoryEnum } from "@shared/constants/category.constant.js";

const ExpenseSchema = new mongoose.Schema({
 amount: {
  type: Number,
  required: [true, "Amount is required!"],
 },
 description: {
  type: String,
  required: [true, "Description is required!"],
 },
 createdBy: {
  type: REF_ID,
  ref: USER_MODEL,
  required: [true, "Created by is required!"]
 },
 category: {
  type: String,
  enum: Object.values(CategoryEnum),
  default: CategoryEnum.Personal
 },
 isSettled: {
  type: Boolean,
  default: false,
 }
}, { timestamps: true });

export const ExpenseModel = mongoose.model(EXPENSE_MODEL, ExpenseSchema);