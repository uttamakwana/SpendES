import { zContactSchema } from "@shared/utils/validation.util";
import z from "zod";

export const sendOtpSchema = z.object({
    contact: zContactSchema,
})

export type TSendOtpRequest = z.infer<typeof sendOtpSchema>;