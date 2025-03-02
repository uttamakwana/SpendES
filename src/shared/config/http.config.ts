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

export type TStatusCode = keyof typeof STATUS_CODE;
export type TStatusCodeValue = (typeof STATUS_CODE)[TStatusCode];