import { REF_ID, SETTLE_EXPENSE_MODEL } from "@shared/constants/global.constant";
import mongoose, { Types } from "mongoose"
import { UserModel } from "./user.model";
import { ExpenseModel, TExpense } from "./expense.model";

export type TSettleExpense = {
    _id: Types.ObjectId;
    createdBy: Types.ObjectId;
    createdFor: Types.ObjectId;
    expenseId?: Types.ObjectId;
    amount: TExpense["amount"];
    createdAt: Date;
}

type TSettleExpenseDocument = mongoose.Document & TSettleExpense;

const SettleExpenseSchema = new mongoose.Schema<TSettleExpenseDocument>({
    createdBy: {
        ref: UserModel,
        type: REF_ID,
        required: true
    },
    createdFor: {
        ref: UserModel,
        type: REF_ID,
        required: true
    },
    expenseId: {
        ref: ExpenseModel,
        type: REF_ID,
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export const SettleExpenseModel = mongoose.model(SETTLE_EXPENSE_MODEL, SettleExpenseSchema);