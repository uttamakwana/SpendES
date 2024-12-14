import { EXPENSE_MODEL, GROUP_MODEL, REF_ID, USER_MODEL } from '@constants';
import mongoose from "mongoose";

const GroupSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, "Group name is required!"]
 },
 description: {
  type: String,
  // required: [true, "Group description is required!"]
 },
 members: [{ type: REF_ID, ref: USER_MODEL }],
 createdBy: {
  type: REF_ID,
  ref: USER_MODEL
 },
 expenses: [{ type: REF_ID, ref: EXPENSE_MODEL }]
}, { timestamps: true })

export const Group = mongoose.model(GROUP_MODEL, GroupSchema);
