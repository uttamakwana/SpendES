import { CONFIG } from "@shared/config/env"
import { CookieOptions, Response } from "express-serve-static-core"
import { fifteenMinutesFromNow, thirtyDayFromNow } from "./date.util"

const defaultCookieOptions: CookieOptions = {
    sameSite: "strict",
    httpOnly: true,
    secure: CONFIG.NODE_ENV === "production"
}

export function getAccessTokenCookieOptions() {
    return { ...defaultCookieOptions, expires: fifteenMinutesFromNow() }
}

export function getRefreshTokenCookieOptions() {
    // return { ...defaultCookieOptions, expires: thirtyDayFromNow(), path: REFRESH_TOKEN_PATH  }
    return { ...defaultCookieOptions, expires: thirtyDayFromNow()  }
}

export function setAuthCookies(res: Response, accessToken: string, refreshToken: string) {
    return res.cookie("accessToken", accessToken, getAccessTokenCookieOptions()).cookie("refreshToken", refreshToken, getRefreshTokenCookieOptions())
}