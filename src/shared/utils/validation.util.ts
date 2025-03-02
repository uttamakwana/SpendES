import z from "zod";

export const zContactSchema = z.number().min(1000000000, "Contact number must be 10 digit number!").max(9999999999, "Contact number must be 10 digit number!");

export const zOtpSchema = z.number().min(1000, "OTP must be 4 digit number!").max(9999, "OTP must be 4 digit number!")

export const zUserAgentSchema = z.string().optional();

export const zNameSchema = z.string().min(2, "Name must at least 2 character long!").max(200, "Name can't be longer than 200 characters!");

export const zEmailSchema  = z.string().email();

export const zAvatarSchema  = z.string().optional();