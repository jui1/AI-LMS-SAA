import { serial, boolean, pgTable, varchar } from "drizzle-orm/pg-core";

export const User_table = pgTable("users", {
  id: serial("id").primaryKey(),
  userName: varchar("user_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  isMember: boolean("is_member").default(false),
});
