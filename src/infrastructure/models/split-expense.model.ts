import { EXPENSE_MODEL, REF_ID, SPLIT_EXPENSE_MODEL, USER_MODEL } from "@shared/constants/global.constant";
import mongoose, { Types } from "mongoose";

type TSplitExpense = {
    _id: Types.ObjectId;
    expenseId: Types.ObjectId;
    splittedFor: Types.ObjectId;
    createdBy: Types.ObjectId;
    amount: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isSettled: boolean;
}
type TSplitExpenseDocument = mongoose.Document & TSplitExpense;

const SplitExpenseSchema = new mongoose.Schema<TSplitExpenseDocument>({
    expenseId: {
        type: REF_ID,
        ref: EXPENSE_MODEL,
        required: [true, "Expense ID is required!"]
    },
    createdBy: {
        type: REF_ID,
        ref: USER_MODEL,
        required: [true, "CreatedById is required"]
    },
    splittedFor: {
        type: REF_ID,
        ref: USER_MODEL,
        required: [true, "SplittedForId is required!"]
    },
    amount: {
        type: Number,
        required: [true, "Amount is required"],
    },
    description: {
        type: String,
        required: [true, "Description is required"]
    },
    isSettled: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const SplitExpenseModel = mongoose.model(SPLIT_EXPENSE_MODEL, SplitExpenseSchema);