import type { Config } from 'drizzle-kit';

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