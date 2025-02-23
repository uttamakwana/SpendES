import { SALT_ROUNDS } from "@/constants/global.constant.js";
import bcrypt from "bcrypt";

export const hashValue = async (value: string) => {
    return bcrypt.hash(value, SALT_ROUNDS);
}

export const compareHashValue = async (value: string, hashedValue: string) => {
    return bcrypt.compare(value, hashedValue).catch(() => false);
}