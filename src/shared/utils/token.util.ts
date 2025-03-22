import { CONFIG } from "@shared/config/env";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";

type TRefreshTokenPayload = {
    sessionId: mongoose.Types.ObjectId;
}

type TAccessTokenPayload = TRefreshTokenPayload & {
    userId: mongoose.Types.ObjectId;
}

export const generateRefreshToken = (payload: TRefreshTokenPayload) => jwt.sign(payload, CONFIG.JWT_REFRESH_TOKEN_SECRET, { expiresIn: "30d" })
export const verifyRefreshToken = <TPayload extends object = TRefreshTokenPayload>(token: string) => {
    try {
        const payload = jwt.verify(token, CONFIG.JWT_REFRESH_TOKEN_SECRET);
        return payload as TPayload;
    } catch (error) {
        console.error("Error while verifying refresh token!");
    }
};
export const generateAccessToken = (payload: TAccessTokenPayload) => jwt.sign(payload, CONFIG.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "15m" })
export const verifyAccessToken = <TPayload extends object = TAccessTokenPayload>(token: string) => {
    try {
        const payload = jwt.verify(token, CONFIG.JWT_ACCESS_TOKEN_SECRET);
        return {
            payload: payload as TPayload
        };
    } catch (error: any) {
        console.error("Error while verifying access token!");
        return {
            error: error.message
        };
    }
};
// const refreshToken = (data: any) => jwt.sign({ sessionId: session._id }, env.JWT_REFRESH_TOKEN_SECRET, { expiresIn: "30d" })
// const accessToken = jwt.sign({ userId: newUser._id, sessionId: session._id }, env.JWT_ACCESS_TOKEN_SECRET, { expiresIn: "15m" })