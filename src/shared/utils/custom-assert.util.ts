import { ErrorHandler } from "@main/middlewares/error-handler.middleware";
import { STATUS_CODE, TStatusCode, TStatusCodeValue } from "@shared/config/http.config";
import { ErrorCode } from "@shared/constants/error-code.constant";
import assert from "node:assert";

type TCustomAssert = (condition: any, statusCode: TStatusCodeValue, message: string, errorCode?: ErrorCode) => asserts condition;

export const customAssert: TCustomAssert = (condition, statusCode, message, errorCode) => assert(condition, new ErrorHandler(message, statusCode, errorCode))