import { updateUser, userHasCompleteProfile } from '@/app/actions';
import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get('userId');

	if (userId) {
		const condition = await userHasCompleteProfile(userId);

		return NextResponse.json(condition, { status: 200 });
	} else {
		return NextResponse.json('Unauthorized', { status: 401 });
	}
}

export async function POST(req: Request) {
	const { data, userId } = (await req.json()) as {
		data: { state: string; country: string };
		userId: string;
	};

	if (!userId) {
		throw new Error('No userId provided');
	}

	try {
		await updateUser(data, userId);
		revalidateTag('collection');
		return NextResponse.json('Updated!', { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: 'Failed!', error }, { status: 500 });
	}
}
