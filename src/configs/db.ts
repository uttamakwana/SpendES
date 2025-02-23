import mongoose from "mongoose"
import { env } from "../constants/env.constant.js";

export const connectToDb = async () => {
    try {
        const response = await mongoose.connect(env.MONGO_URI);
        console.log("Database connection successfull!");
        console.log("Database name:", response.connection.name);
        console.log("Database host:", response.connection.host);
    } catch (error) {
        console.error("Error while connecting to the database");
        process.exit(1);
    }
}