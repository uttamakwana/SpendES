import { zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const getAllSplitExpenseOfFriendSchema = z.object({
    friendId: zIdSchema,
    userId: zIdSchema,
});

export type TGetAllSplitExpenseOfFriendRequest = z.infer<typeof getAllSplitExpenseOfFriendSchema>;