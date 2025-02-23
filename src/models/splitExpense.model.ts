import { EXPENSE_MODEL, REF_ID, SPLIT_EXPENSE_MODEL, USER_MODEL } from '@constants/global.constant.js';
import mongoose from 'mongoose';

const SplitExpenseSchema = new mongoose.Schema({
 expenseId: {
  type: REF_ID,
  ref: EXPENSE_MODEL
 },
 splittedFor: {
  type: REF_ID,
  ref: USER_MODEL
 },
 amount: {
  type: Number,
  required: [true, "Split amount is required!"]
 },
 description: {
  type: String,
  required: [true, "Split description is required!"]
 },
 isSettled: {
  type: Boolean,
  default: false
 }
}, { timestamps: true })

export const SplitExpense = mongoose.model(SPLIT_EXPENSE_MODEL, SplitExpenseSchema);
