import { CONFIG } from "@shared/config/env";
import mongoose from "mongoose";

export async function connectToDatabase() {
    try {
        const response = await mongoose.connect(CONFIG.DATABASE_URI);
        console.log("Database name:", response.connection.name);
        console.log("Database host:", response.connection.host);
    } catch (error) {
        console.log("Failed to connect to database!");
    }
}