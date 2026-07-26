import {
  pgTable,
  uuid,
  text,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

export const investigationStatusEnum = pgEnum("investigation_status", [
  "PENDING",
  "RUNNING",
  "COMPLETED",
  "FAILED",
]);

export const investigations = pgTable("investigations", {
  id: uuid("id").defaultRandom().primaryKey(),

  question: text("question").notNull(),

  status: investigationStatusEnum("status")
    .default("PENDING")
    .notNull(),

  report: text("report"),

  error: text("error"),

  createdAt: timestamp("created_at").defaultNow().notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});