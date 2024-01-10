import cors from "cors";
import http from "http";
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";

import router from "./router";

import Database from "./config/database";
import ErrorHandlerMiddleware from "./middlewares/error";
import { firebaseInitializer } from "./config/firebase";

const app = express();

app.use(cors({ credentials: true }));

dotenv.config();
app.use(bodyParser.json());
app.use(compression());
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// firebase certificate credentials config
// process.env.GOOGLE_APPLICATION_CREDENTIALS;
// firebaseInitializer();

const API_VERSION = process.env.API_VERSION || "/api/v1.0";

const PRODUCTION_DATABASE = process.env.DATABASE_PROD_URL || "";
const DEVELOPMENT_DATABASE = process.env.DATABASE_DEV_URL || "";

const db = new Database(
  process.env.NODE_ENV === "production"
    ? PRODUCTION_DATABASE
    : DEVELOPMENT_DATABASE,
);
db.connect().catch((error) =>
  console.error("❌ Error while database connection -- ", error),
);

app.use(API_VERSION, router());

app.use(ErrorHandlerMiddleware);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} ⚙️`);
});
