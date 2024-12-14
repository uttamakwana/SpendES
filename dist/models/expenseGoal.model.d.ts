import mongoose from "mongoose";
export declare const ExpenseGoal: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
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
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    goalAmount: number;
    startDate?: NativeDate | null | undefined;
    endDate?: NativeDate | null | undefined;
    totalExpense?: number | null | undefined;
    goalStatus?: {
        OnTrack?: unknown;
        Exceeded?: unknown;
        BelowTrack?: unknown;
    } | null | undefined;
    note?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=expenseGoal.model.d.ts.map