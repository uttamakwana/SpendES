import { SESSION_MODEL, USER_MODEL } from "@shared/constants/global.constant";
import { thirtyDayFromNow } from "@shared/utils/date.util";
import mongoose from "mongoose";

export interface SessionDocument extends mongoose.Document {
    userId: mongoose.Types.ObjectId;
    userAgent?: string;
    createdAt: Date;
    expiresAt: Date;
}

const SessionSchema = new mongoose.Schema<SessionDocument>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: USER_MODEL,
        required: true,
    },
    userAgent: {
        type: String,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    },
    expiresAt: {
        type: Date,
        required: true,
        default: thirtyDayFromNow()
    }
})

export const SessionModel = mongoose.model<SessionDocument>(SESSION_MODEL, SessionSchema);