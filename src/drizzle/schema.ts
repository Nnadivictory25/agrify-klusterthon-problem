import { index, int, integer, sqliteTable, text, uniqueIndex } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
	id: text("id").primaryKey(),
	email: text("email").notNull(),
	firstName: text("first_name"),
	lastName: text("last_name"),
    createdAt: text("created_at").notNull(),
    country: text("country"),
    state: text("state"),
	verified: integer('verified', { mode: 'boolean' }).notNull(),
},
(table) => {
	return {
		emailUnique: uniqueIndex("users_email_unique").on(table.email),
	}
});

export const produces = sqliteTable("produces", {
	id: text("id").primaryKey().notNull(),
	userId: text("user_id").notNull().references(() => users.id, { onDelete: "cascade" } ),
    crop: text("crop").notNull(),
    variety: text("variety"),
    quantity: int("quantity").notNull(),
    unit: text("unit").notNull(),
    cultivatedAt: text("cultivated_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
    createdAt: text("created_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
	updatedAt: text("updated_at").default("sql`(CURRENT_TIMESTAMP)`").notNull(),
},
(table) => {
	return {
		userIdIdx: index("userId_idx").on(table.userId),
		idIdx: uniqueIndex("id_idx").on(table.id),
	}
});
