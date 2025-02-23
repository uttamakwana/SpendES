import { z } from "zod";

export const createUserRequestSchema = z.object({
    name: z.string(),
    email: z.string(),
    contact: z.string(),
    password: z.string(),
    pin: z.string(),
})