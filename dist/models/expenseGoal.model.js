import { EXPENSE_GOAL_MODEL, REF_ID, USER_MODEL } from '@constants/global.constant.js';
import { ExpenseGoalStatus } from '@enums/expenseGoal.enum.js';
import mongoose from "mongoose";
const ExpenseGoalSchema = new mongoose.Schema({
    createdBy: {
        type: REF_ID,
        ref: USER_MODEL
    },
    startDate: Date,
    endDate: Date,
    goalAmount: {
        type: Number,
        required: [true, "Monthly goal amout is required"]
    },
    totalExpense: Number,
    goalStatus: ExpenseGoalStatus,
    note: String
}, { timestamps: true });
export const ExpenseGoal = mongoose.model(EXPENSE_GOAL_MODEL, ExpenseGoalSchema);
//# sourceMappingURL=expenseGoal.model.js.map