import { db } from '@/drizzle/db';
import { users } from '@/drizzle/schema';
import { NextResponse } from 'next/server';

interface Req {
	created_at: number;
	email_addresses: [
		{
			email_address: string;
			verification: {
				status: string;
			};
		}
	];
	id: string;
	first_name: string;
	last_name: string;
}

export async function POST(req: Request) {
	const body: Promise<{ data: Req }> = await req.json();

	const data = (await body).data;

	const {
		created_at: timestamp,
		email_addresses,
		id,
		first_name,
		last_name,
	} = data;

	const createdAt = new Date(timestamp).toLocaleDateString();
	const email = email_addresses[0].email_address;
	const verified = email_addresses[0].verification.status === 'verified';

	try {
		await db.insert(users).values({
			id,
			createdAt,
			email,
			verified,
			firstName: first_name,
			lastName: last_name,
		});
	} catch (error) {
		return NextResponse.json(error, { status: 500 });
	}

	return NextResponse.json('User Added Successfully', { status: 200 });
}
