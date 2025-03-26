import { zAmountSchema, zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const createSettleExpenseRequestSchema = z.object({
    userId: zIdSchema,
    friendId: zIdSchema,
    amount: zAmountSchema,
    expenseId: zIdSchema.optional()
})

export type TCreateSettleExpenseRequestRequest = z.infer<typeof createSettleExpenseRequestSchema>;