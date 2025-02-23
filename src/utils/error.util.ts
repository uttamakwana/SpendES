import type { HttpStatusCode } from "@/constants/http.constant.js";

export class CustomError extends Error {
    constructor(public statusCode: HttpStatusCode, public message: string) {
        super(message);
    }
}