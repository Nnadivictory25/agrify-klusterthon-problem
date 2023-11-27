'use server';

import { QdrantClient } from '@qdrant/js-client-rest';
import { HuggingFaceTransformersEmbeddings } from 'langchain/embeddings/hf_transformers';
import { Message } from 'ai/react';
import { db } from '@/drizzle/db';
import { chats, users } from '@/drizzle/schema';
import { eq } from 'drizzle-orm';
import OpenAI from 'openai';

const embeddingModel = new HuggingFaceTransformersEmbeddings({
	modelName: 'Supabase/gte-small',
	maxConcurrency: 5,
});

function capitalizeWords(str: string) {
	return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

export async function getRelevantDocs(query: string, country: string) {
	const client = new QdrantClient({
		url: process.env.QDRANT_URL,
		apiKey: process.env.QDRANT_API_KEY,
	});

	const vector = await embeddingModel.embedQuery(query);

	const relevantDocs = await client.search('crop_data', {
		filter: {
			must: [
				{
					key: 'metadata.country',
					match: {
						value: capitalizeWords(country),
					},
				},
			],
		},
		params: {
			hnsw_ef: 128,
			exact: false,
		},
		vector,
		limit: 30,
	});

	console.log(
		JSON.stringify(
			relevantDocs.map((doc) => doc.payload?.content),
			null,
			2
		)
	);
}

export async function updateChat(chatId: string, messages: Message[]) {
	await db
		.update(chats)
		.set({ chat: JSON.stringify(messages) })
		.where(eq(chats.id, chatId));
}

export async function getChats(userId: string) {
	return await db.select().from(chats).where(eq(chats.userId, userId));
}

export async function createNewChatInDB(chatId: string, userId: string) {
	await db.insert(chats).values({ id: chatId, userId, title: 'New Chat' });
}

export async function generateChatTitle(messages: Message[], chatId: string) {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY!,
	});

	const formattedMessages = messages.map((message) => {
		if (message.role === 'user') {
			return 'human: ' + message.content;
		}
	});

	const response = await openai.completions.create({
		model: 'text-davinci-003',
		temperature: 0,
		prompt: `Create a chat title for this conversation, reply with the chat title alone no words before no words after just the title explicitly!!.
		Conversation: ${formattedMessages.join('\n')}
		`,
	});

	const title = response.choices[0].text;

	await db.update(chats).set({ title }).where(eq(chats.id, chatId));
}

export async function userHasCompleteProfile(userId: string) {
	const result = await db
		.select({ state: users.state })
		.from(users)
		.where(eq(users.id, userId));

	const { state } = result[0];

	return !!state;
}

export async function updateUser(
	{ country, state }: { state: string; country: string },
	userId: string
) {
	return await db.update(users).set({ country, state }).where(eq(users.id, userId));
}
