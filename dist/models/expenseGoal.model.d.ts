import mongoose from "mongoose";
export declare const ExpenseGoal: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        Exceeded?: unknown;
        OnTrack?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=expenseGoal.model.d.ts.map