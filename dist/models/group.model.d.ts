import mongoose from "mongoose";
export declare const Group: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
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
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    name: string;
    members: mongoose.Types.ObjectId[];
    expenses: mongoose.Types.ObjectId[];
    description?: string | null | undefined;
    createdBy?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=group.model.d.ts.map