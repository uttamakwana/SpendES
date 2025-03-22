import mongoose, { Types } from "mongoose";
import { EXPENSE_MODEL, REF_ID, USER_MODEL } from "@shared/constants/global.constant.js";
import { CategoryEnum } from "@shared/constants/category.constant.js";

type TExpense = {
    amount: number;
    description: string;
    createdBy: Types.ObjectId;
    category: CategoryEnum;
    isSettled: boolean;
    isSplitted: boolean;
    createdAt: Date;
    updatedAt: Date;
}
type ExpenseDocument = mongoose.Document & TExpense;
const ExpenseSchema = new mongoose.Schema<ExpenseDocument>({
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
    },
    isSplitted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export const ExpenseModel = mongoose.model(EXPENSE_MODEL, ExpenseSchema);