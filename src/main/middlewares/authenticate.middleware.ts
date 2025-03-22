import { STATUS_CODE } from "@shared/config/http.config";
import { ErrorCode } from "@shared/constants/error-code.constant";
import { customAssert } from "@shared/utils/custom-assert.util";
import { verifyAccessToken } from "@shared/utils/token.util";
import { NextFunction, Request, Response } from "express-serve-static-core"

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.accessToken as string | undefined;
    customAssert(accessToken, STATUS_CODE.UNAUTHORIZED, "Invalid access token!");

    const { payload, error } = verifyAccessToken(accessToken);
    customAssert(payload, STATUS_CODE.UNAUTHORIZED, error === "jwt expired" ? "Access token expired!" : "Invalid token!", ErrorCode.InvalidAccessToken);

    req.userId = payload.userId;
    req.sessionId = payload.sessionId;

    next();
}