import z from "zod";
import { zAmountSchema, zCategorySchema, zDescriptionSchema, zIdSchema } from "@shared/utils/validation.util";

export const createSplitExpenseSchema = z.object({
    createdBy: zIdSchema,
    amount: zAmountSchema,
    description: zDescriptionSchema,
    category: zCategorySchema.optional(),
    splits: z.array(z.object({ userId: zIdSchema, amount: zAmountSchema, description: zDescriptionSchema.optional() }))
});

export type TCreateSplitExpenseRequest = z.infer<typeof createSplitExpenseSchema>;