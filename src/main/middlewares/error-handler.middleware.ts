import { Request, Response, NextFunction, ErrorRequestHandler } from "express-serve-static-core";
import z from "zod";

// Define STATUS_CODE with strong typing
export const STATUS_CODE = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    INTERNAL_SERVER_ERROR: 500,
} as const;

type TStatusCode = keyof typeof STATUS_CODE;
type TStatusCodeValue = (typeof STATUS_CODE)[TStatusCode];

// Custom ErrorHandler class
export class ErrorHandler extends Error {
    public statusCode: TStatusCodeValue;

    constructor(message: string, statusCode: TStatusCode = "INTERNAL_SERVER_ERROR") {
        super(message);
        this.statusCode = STATUS_CODE[statusCode];
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