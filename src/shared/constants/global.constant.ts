import mongoose from 'mongoose';

// MODEL NAMES
export const USER_MODEL = "user";
export const FRIEND_MODEL = "friend";
export const EXPENSE_MODEL = "expense";
export const SPLIT_EXPENSE_MODEL = "split_expense";
export const GROUP_MODEL = "group";
export const EXPENSE_GOAL_MODEL = "expense_goal";
export const SESSION_MODEL = "session";
export const VERFICATION_CODE_MODEL = "verification_code";

// PATH
export const REFRESH_TOKEN_PATH = "http://localhost:4000/api/v1/auth/refresh";

// REF ID
export const REF_ID = mongoose.Schema.Types.ObjectId;