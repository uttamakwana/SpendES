import dotenv from 'dotenv';

dotenv.config();

export const config = {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT || '3000', 10),
    mongoUrl: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/SpendES',
};