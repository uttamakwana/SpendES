import { STATUS_CODE } from "@shared/config/http.config";
import { ErrorCode } from "@shared/constants/error-code.constant";
import { customAssert } from "@shared/utils/custom-assert.util";
import { verifyAccessToken } from "@shared/utils/token.util";
import { NextFunction, Request, Response } from "express-serve-static-core"
import { ErrorHandler } from "./error-handler.middleware";

export const authenticate = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.cookies.accessToken as string | undefined;

    if (!accessToken) {
        return next(new ErrorHandler("Invalid access token!", STATUS_CODE.UNAUTHORIZED, ErrorCode.InvalidAccessToken));
    }

    const { payload, error } = verifyAccessToken(accessToken);
    if (!payload) {
        return next(new ErrorHandler(error === "jwt expired" ? "Access token expired!" : "Invalid token!", STATUS_CODE.UNAUTHORIZED, ErrorCode.InvalidAccessToken))
    }

    req.userId = payload.userId;
    req.sessionId = payload.sessionId;

    next();
}