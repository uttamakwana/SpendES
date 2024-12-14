import mongoose from "mongoose";
export declare const Friend: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
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
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    user1?: mongoose.Types.ObjectId | null | undefined;
    user2?: mongoose.Types.ObjectId | null | undefined;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
//# sourceMappingURL=friend.model.d.ts.map