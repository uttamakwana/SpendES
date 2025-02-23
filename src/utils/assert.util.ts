import assert from "node:assert";
import type { HttpStatusCode } from "@/constants/http.constant.js";
import { CustomError } from "./error.util.js";

type TCustomAssert = (condition: any, statusCode: HttpStatusCode, message: string) => asserts condition;

/** Assert a condition and throw a Custom Error if condition is falsy! */
export const customAssert: TCustomAssert = (condition, statusCode, message) => assert(condition, new CustomError(statusCode, message))