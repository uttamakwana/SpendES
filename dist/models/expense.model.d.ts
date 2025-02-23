import mongoose from "mongoose";
export declare const Expense: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
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
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    amount: number;
    description: string;
    createdBy: mongoose.Types.ObjectId;
    isSettled: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=expense.model.d.ts.map