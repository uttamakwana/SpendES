import mongoose from 'mongoose';
export declare const SplitExpense: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
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
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    description: string;
    amount: number;
    isSettled: boolean;
    expenseId?: mongoose.Types.ObjectId | null | undefined;
    splittedFor?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=splitExpense.model.d.ts.map