import { zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const settleExpenseSchema = z.object({
    friendId: zIdSchema,
    userId: zIdSchema,
});

export type TSettleExpenseRequest = z.infer<typeof settleExpenseSchema>;