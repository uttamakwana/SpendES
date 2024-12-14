import mongoose from "mongoose";
import { EXPENSE_MODEL, REF_ID, USER_MODEL } from '@constants';
import { CategoryEnum } from '@enums';
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
        ref: USER_MODEL
    },
    category: {
        type: CategoryEnum,
        default: CategoryEnum.Personal
    },
    isSettled: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });
export const Expense = mongoose.model(EXPENSE_MODEL, ExpenseSchema);
//# sourceMappingURL=expense.model.js.map