CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	"role" varchar(50) DEFAULT 'user' NOT NULL,
	"created_at" varchar(255) DEFAULT '2026-04-07T17:28:27.775Z' NOT NULL,
	"updated_at" varchar(255) DEFAULT '2026-04-07T17:28:27.776Z' NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
