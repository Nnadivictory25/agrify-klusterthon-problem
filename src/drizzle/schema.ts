import { sql } from 'drizzle-orm';
import {
	index,
	int,
	integer,
	sqliteTable,
	text,
	uniqueIndex,
} from 'drizzle-orm/sqlite-core';

export const users = sqliteTable(
	'users',
	{
		id: text('id').primaryKey(),
		email: text('email').notNull(),
		firstName: text('first_name'),
		lastName: text('last_name'),
		createdAt: text('created_at').notNull(),
		country: text('country'),
		state: text('state'),
		verified: integer('verified', { mode: 'boolean' }).notNull(),
	},
	(table) => {
		return {
			emailUnique: uniqueIndex('users_email_unique').on(table.email),
		};
	}
);

export const produces = sqliteTable(
	'produces',
	{
		id: text('id').primaryKey(),
		userId: text('user_id')
			.notNull()
			.references(() => users.id, { onDelete: 'cascade' }),
		crop: text('crop').notNull(),
		variety: text('variety'),
		quantity: int('quantity').notNull(),
		unit: text('unit').notNull(),
		cultivatedAt: text('cultivated_at')
			.default(sql`(CURRENT_TIMESTAMP)`)
			.notNull(),
		createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
		updatedAt: text('updated_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	},
	(table) => {
		return {
			idIdx: uniqueIndex('id_idx').on(table.id),
		};
	}
);

export const chats = sqliteTable('chats', {
	id: text('id').primaryKey(),
	userId: text('user_id')
		.notNull()
		.references(() => users.id, { onDelete: 'cascade' }),
	title: text('title').notNull(),
	chat: text('chat'),
	createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
	updatedAt: text('updated_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
},
(table) => {
	return {
		chat_indx: index('chat_idx').on(table.id),
	};
}
);
