import { CategoryEnum } from "@shared/constants/category.constant";
import z from "zod";

export const zContactSchema = z.number().min(1000000000, "Contact number must be 10 digit number!").max(9999999999, "Contact number must be 10 digit number!");

export const zOtpSchema = z.number().min(1000, "OTP must be 4 digit number!").max(9999, "OTP must be 4 digit number!")

export const zUserAgentSchema = z.string().optional();

export const zNameSchema = z.string().min(2, "Name must at least 2 character long!").max(200, "Name can't be longer than 200 characters!");

export const zEmailSchema = z.string().email();

export const zAvatarSchema = z.string().optional();

export const zAmountSchema = z.number().min(1, "Amount must be greater than 0!").max(100000, "Amount must be less than 1 Lakh!");

export const zDescriptionSchema = z.string().min(3, "Description must contain more than 2 character").max(200, "Description must be less than 200 character");

export const zIdSchema = z.string().length(24, "Id must be 24 characters long!");

export const zCategorySchema = z.nativeEnum(CategoryEnum);