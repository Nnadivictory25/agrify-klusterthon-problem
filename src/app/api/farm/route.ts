import { addProduceToDB } from '@/app/actions';
import { FarmProduce } from '@/app/dashboard/farm/components/FarmCard';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	const { data, userId } = (await req.json()) as {
		data: FarmProduce;
		userId: string;
	};

	if (!userId) {
		return NextResponse.json('Unauthorized', { status: 401 });
	}

	try {
		await addProduceToDB(data, userId);
		return NextResponse.json('OK', { status: 200 });
	} catch (error) {
		console.log('An error occured while inserting produce' + error);
		return NextResponse.json(error, { status: 500 });
	}
}
