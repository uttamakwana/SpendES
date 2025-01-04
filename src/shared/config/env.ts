import "dotenv/config";

export const CONFIG = {
    PORT: parseInt(process.env.PORT || "3000", 10),
    DATABASE_URI: process.env.DATABASE_MONGO_URI || "mongodb://127.0.0.1:27017/spendes",
    NODE_ENV: process.env.NODE_ENV || "development"
}