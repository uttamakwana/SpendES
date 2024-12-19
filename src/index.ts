import express from "express";
import "dotenv/config";
import helmet from 'helmet';
import cors from "cors";

// VARIABLES
const app = express();
const PORT = process.env.PORT || 8080;

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(cors());

// ROUTES
app.use("/api/v1/users", userRouter);

// SERVER
app.listen(PORT, () => {
 console.log(`Server started on http://localhost:${PORT}`);
})
