import type { Config } from 'drizzle-kit';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' })

export default {
	schema: './src/drizzle/schema.ts',
	driver: 'turso',
	out: './src/drizzle/migrations',
	dbCredentials: {
		url: process.env.TURSO_URL as string,
		authToken: process.env.TURSO_AUTH_TOKEN as string,
	},
	verbose: true,
} satisfies Config;