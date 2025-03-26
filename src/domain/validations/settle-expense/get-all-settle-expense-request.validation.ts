import { zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const getAllSettleExpenseRequestSchema = z.object({
    userId: zIdSchema
});

export type TGetAllSettleExpenseRequestRequest = z.infer<typeof getAllSettleExpenseRequestSchema>