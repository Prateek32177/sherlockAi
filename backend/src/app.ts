import express, { type Express } from "express";
import healthRouter from "./health/health.routes.js";

const app: Express = express();

app.use(express.json());
app.use("/health", healthRouter);

export default app;

//this file handles below concerns
//register middleware
//register routes
//error handler
//404 handler
