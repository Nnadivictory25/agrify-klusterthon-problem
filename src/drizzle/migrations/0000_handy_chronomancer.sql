CREATE TABLE `produces` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`crop` text NOT NULL,
	`variety` text,
	`quantity` integer NOT NULL,
	`unit` text NOT NULL,
	`cultivated_at` text DEFAULT 'sql`(CURRENT_TIMESTAMP)`' NOT NULL,
	`created_at` text DEFAULT 'sql`(CURRENT_TIMESTAMP)`' NOT NULL,
	`updated_at` text DEFAULT 'sql`(CURRENT_TIMESTAMP)`' NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`first_name` text,
	`last_name` text,
	`created_at` text NOT NULL,
	`country` text,
	`state` text,
	`verified` integer NOT NULL
);
--> statement-breakpoint
CREATE INDEX `userId_idx` ON `produces` (`user_id`);--> statement-breakpoint
CREATE UNIQUE INDEX `id_idx` ON `produces` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);