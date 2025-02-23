import { z } from "zod";

export const createExpenseRequestSchema = z.object({
    amount: z.number(),
    description: z.string(),
    createdBy: z.string(),
})