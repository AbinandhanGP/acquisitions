import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    password: varchar('password', { length: 255 }).notNull(),
    role: varchar('role', { length: 50 }).notNull().default('user'),
    created_at: varchar('created_at', { length: 255 }).notNull().default(new Date().toISOString()),
    updated_at: varchar('updated_at', { length: 255 }).notNull().default(new Date().toISOString())
});