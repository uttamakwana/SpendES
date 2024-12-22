import "module-alias/register";
import express from "express";
import { rootRouter } from "./routers/root.route";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

app.use("/api/v1", rootRouter);

async function connectToDb() {
    try {
        const response = await mongoose.connect("mongodb://127.0.0.1:27017/spendes");

        console.log("Database name:", response.connection.name);
        console.log("Database host:", response.connection.host);
    } catch (error) {
        console.log("Failed to connect to database!");
    }

}

app.listen(5000, () => {
    console.log("Server started on port: 5000");

    connectToDb();
})