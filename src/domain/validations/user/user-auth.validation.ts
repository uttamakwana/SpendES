import { zAvatarSchema, zContactSchema, zEmailSchema, zNameSchema, zUserAgentSchema } from "@shared/utils/validation.util";
import z from "zod";

export const registerUserSchema = z.object({
    name: zNameSchema,
    email: zEmailSchema,
    contact: zContactSchema,
    avatar: zAvatarSchema,
    userAgent: zUserAgentSchema,
})

export const loginUserSchema = z.object({
    contact: zContactSchema,
    userAgent: zUserAgentSchema
})

export type TRegisterUserRequest = z.infer<typeof registerUserSchema>;
export type TLoginUserRequest = z.infer<typeof loginUserSchema>;