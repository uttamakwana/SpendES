import { zIdSchema } from "@shared/utils/validation.util";
import z from "zod";

export const getUserInfoSchema = zIdSchema;

export type TGetUserInfoRequest = z.infer<typeof getUserInfoSchema>;