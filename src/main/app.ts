import express, { Application } from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import cookieParser from "cookie-parser";
import { connectToDatabase } from "@infrastructure/database/mongodb.database";
import { rootRouter } from "@main/routers/root.route";
import { errorHandler } from "@main/middlewares/error-handler.middleware";
import { CONFIG } from "@shared/config/env";
import { logger } from "@shared/utils/logger";

export class App {
    public express: Application;

    constructor() {
        this.express = express();
    }

    // Initiate database connection and start the server only if successful
    public async init() {
        try {
            // Connect to the database
            await this.initDatabaseConnection();
            // Initialize other middlewares and routes after DB connection
            this.initMiddlewares();
            this.initRoute();
            this.initErrorHandling();
            // Start the server after successful DB connection
            this.start();
        } catch (error) {
            logger.error("Failed to initialize the server!", error);
            // Exit process if the database connection fails
            process.exit(1);
        }
    }

    // Establish the database connection
    private async initDatabaseConnection() {
        await connectToDatabase();  // Ensure this function handles connection errors
    }

    // Initialize middlewares
    private initMiddlewares() {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan("dev"));
        this.express.use(express.json());
        this.express.use(compression());
        this.express.use(cookieParser());
    }

    // Define routes
    private initRoute() {
        this.express.use("/api/v1", rootRouter);
    }

    // Initialize error handling
    private initErrorHandling() {
        this.express.use(errorHandler);
    }

    // Start the Express server
    private start() {
        this.express.listen(CONFIG.PORT, () => {
            // console.log(`Server started on http://localhost:${CONFIG.PORT}`);
            logger.info(`Server started on http://localhost:${CONFIG.PORT}`)
        });
    }
}
