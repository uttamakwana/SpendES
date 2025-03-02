import z from "zod";

export const refreshAccessTokenSchema = z.string();

export type TRefreshAccessTokenRequest = z.infer<typeof refreshAccessTokenSchema>