import { z } from "zod";

const envSchema = z.object({
    NODE_ENV: z.string().nonempty(),
    MONGO_URI: z.string().nonempty(),
    PORT: z.string().nonempty(),
    APP_ORIGIN: z.string().nonempty(),
    JWT_REFRESH_TOKEN_SECRET: z.string().nonempty(),
    JWT_ACCESS_TOKEN_SECRET: z.string().nonempty(),
})

export const env = envSchema.parse(process.env);