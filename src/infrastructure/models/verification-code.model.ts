import { USER_MODEL, VERFICATION_CODE_MODEL } from "@shared/constants/global.constant";
import { VerificationCodeTypeEnum } from "@shared/constants/verification-code.constant";
import mongoose from "mongoose";

interface VerificationCodeDocument extends mongoose.Document {
    contact: number;
    otp: number;
    type: VerificationCodeTypeEnum;
    expiresAt: Date;
    createdAt: Date;
}

const VerificationCodeSchema = new mongoose.Schema<VerificationCodeDocument>({
    contact: {
        type: Number,
        required: true,
        index: true
    },
    otp: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    expiresAt: {
        type: Date,
        required: true
    }
})

export const VerificationCodeModel = mongoose.model<VerificationCodeDocument>(VERFICATION_CODE_MODEL, VerificationCodeSchema)