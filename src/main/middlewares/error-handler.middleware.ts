import { TStatusCode, TStatusCodeValue } from "@shared/config/http.config";
import { STATUS_CODE } from "@shared/constants/http.constant";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express-serve-static-core";
import z from "zod";

// Custom ErrorHandler class
export class ErrorHandler extends Error {
    public statusCode: TStatusCodeValue;

    constructor(message: string, statusCode: TStatusCodeValue = 500) {
        super(message);
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, new.target.prototype); // Maintain proper prototype chain
        Error.captureStackTrace(this, this.constructor); // Capture the stack trace
    }
}

// Custom error handler middleware
export const errorHandler: ErrorRequestHandler = (
    err: ErrorHandler,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const message = err.message || "Internal Server Error!";
    const statusCode = err.statusCode || STATUS_CODE.INTERNAL_SERVER_ERROR;

    if (err instanceof z.ZodError) {
        handleZodError(err, res);
        return;
    }

    res.status(statusCode).json({
        success: false,
        message,
    });
};


function handleZodError(error: z.ZodError, res: Response) {
    const errors = error.issues.map(err => ({
        path: err.path.join(", "),
        message: err.message
    }))

    return res.status(STATUS_CODE.BAD_REQUEST).json({ message: error.message, errors })
}