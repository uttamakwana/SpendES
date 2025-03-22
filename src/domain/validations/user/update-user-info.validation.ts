import { zIdSchema, zNameSchema } from "@shared/utils/validation.util";
import z from "zod";

export const updateUserInfoSchema = z.object({
    id: zIdSchema,
    name: zNameSchema
});

export type TUpdateUserInfoRequest = z.infer<typeof updateUserInfoSchema>;