import postgres from "postgres";
import { env } from "../config/env.js";
import { drizzle } from "drizzle-orm/postgres-js";

 const sql = postgres(env.DATABASE_URL);

 export const db = drizzle(sql);