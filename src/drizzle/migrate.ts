import { migrate } from 'drizzle-orm/libsql/migrator';
import { client, db } from './db';
import dotenv from 'dotenv';
dotenv.config({ path: `.env.local` });

if (!process.env.TURSO_URL) {
	throw new Error('Turso URL must be specified!');
}

async function main() {
	await migrate(db, {
		migrationsFolder: 'src/drizzle/migrations',
	});
}

if (process.env.NODE_ENV !== 'production') {
	main()
		.then(() => {
			console.log('Tables migrated!');
			client.close();
			process.exit(0);
		})
		.catch((err) => {
			console.error('Error performing migration: ', err);
			client.close();
			process.exit(1);
		});
}
