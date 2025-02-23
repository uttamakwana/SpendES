import type { CookieOptions, Response } from "express";
import { env } from "@/constants/env.constant.js";
import { refreshTokenPath } from "@/constants/global.constant.js";
import { fifteenMinutesFromNow, thirtyDayFromNow } from "./date.util.js";

const defaultCookieOptions: CookieOptions = {
    sameSite: "strict",
    httpOnly: true,
    secure: env.NODE_ENV === "production"
}

export function getAccessTokenCookieOptions() {
    return { ...defaultCookieOptions, expires: fifteenMinutesFromNow() }
}

export function getRefreshTokenCookieOptions() {
    return { ...defaultCookieOptions, expires: thirtyDayFromNow(), path: refreshTokenPath }
}

export function setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
    return res.cookie("accessToken", accessToken, getAccessTokenCookieOptions()).cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions())
}

export function clearCookies(res: Response) {
    return res.clearCookie("accessToken").clearCookie("refreshToken", { path: refreshTokenPath })
} 