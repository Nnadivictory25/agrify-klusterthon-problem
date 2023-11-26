import { createNewChatInDB, generateChatTitle, getChats } from '@/app/actions';
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const userId = searchParams.get('userId');

	if (!userId) {
		throw new Error('No user id provided');
	}

	try {
        const chats = await getChats(userId);

		return NextResponse.json(chats, { status: 200 });
	} catch (error) {
		return NextResponse.json({ error }, { status: 200 });
	}
}

export async function POST(req: Request) {
    const { searchParams } = new URL(req.url);
	const userId = searchParams.get('userId');
    const chatId = uuidv4()

    if (!userId) {
		throw new Error('No user id provided');
	}

    try {
        createNewChatInDB(chatId, userId)
        return NextResponse.redirect(new URL('/dashboard/chat-ai/' + chatId, req.url), 302)
    } catch (error) {
        console.log(error);
    }
}
