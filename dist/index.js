import "module-alias/register.js";
import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import { env } from "./constants/env.constant.js";
import { OK } from "./constants/http.constant.js";
import { rootRouter } from "./routes/root.router.js";
import { connectToDb } from "./configs/db.js";
const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.APP_ORIGIN, credentials: true }));
app.use(cookieParser());
app.get("/health", (_, res) => {
    res.status(OK).json({ success: true, message: "API is healthy!" });
});
app.use("/api/v1", rootRouter);
app.listen(env.PORT, () => {
    connectToDb();
    console.log("Server running on port", env.PORT);
});
//# sourceMappingURL=index.js.map