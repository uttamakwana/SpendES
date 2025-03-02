import { ErrorHandler } from "@main/middlewares/error-handler.middleware";
import { STATUS_CODE, TStatusCode, TStatusCodeValue } from "@shared/config/http.config";
import assert from "node:assert";

type TCustomAssert = (condition: any, statusCode: TStatusCodeValue, message: string) => asserts condition;

export const customAssert: TCustomAssert = (condition, statusCode, message) => assert(condition, new ErrorHandler(message, statusCode))