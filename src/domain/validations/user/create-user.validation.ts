import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters long."),
    email: z.string().email("Invalid email format."),
    password: z.string().min(6, "Password must be at least 6 characters long."),
    pin: z.number().min(1000, "Pin must be a 4-digit number.").max(9999, "Pin must be a 4-digit number."),
    contact: z.number()
});

export type TCreateUserRequest = z.infer<typeof createUserSchema>;
