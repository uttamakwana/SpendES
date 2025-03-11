import { zAmountSchema, zCategorySchema, zDescriptionSchema, zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const createExpenseSchema = z.object({
    amount: zAmountSchema,
    description: zDescriptionSchema,
    createdBy: zIdSchema,
    category: zCategorySchema
})

export type TCreateExpenseRequest = z.infer<typeof createExpenseSchema>;