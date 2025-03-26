import { zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const getAllExpenseOfUserSchema = z.object({
    id:zIdSchema
})

export type TGetAllExpenseOfUserRequest = z.infer<typeof getAllExpenseOfUserSchema>