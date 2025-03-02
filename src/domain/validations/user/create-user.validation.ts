import { zContactSchema, zOtpSchema } from "@shared/utils/validation.util";
import { z } from "zod";

export const createUserSchema = z.object({
    contact: zContactSchema,
    otp: zOtpSchema,
});

export type TCreateUserRequest = z.infer<typeof createUserSchema>;
