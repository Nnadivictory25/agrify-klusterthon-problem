import { Configuration, OpenAIApi } from 'openai-edge';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { generateChatTitle, updateChat } from '@/app/actions';

export const runtime = 'edge';

const config = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
	try {
		const { messages, userId, chatId } = await req.json();

		if (messages.length === 1 && userId) {
			generateChatTitle(messages, chatId);
		}

		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			stream: true,
			messages: [
				{
					role: 'system',
					content:
						"Your name is 'Agrify'. You are a helpful assistant that assists farmers in making informed decisions. Your job is to provide expert advice on crop management, market insights, and real-time problem-solving. Also Always give your answers in markdown format",
				},
				...messages,
			],
		});

		const stream = OpenAIStream(response, {
			onStart: async () => {
				if (chatId && userId) {
					updateChat(chatId, messages);
				}
			},
			onCompletion: async (completion: string) => {
				console.log(completion);
			},
		});

		return new StreamingTextResponse(stream);
	} catch (error) {
		if (error instanceof OpenAI.APIError) {
			const { name, status, headers, message } = error;
			return NextResponse.json({ name, status, headers, message }, { status });
		} else {
			throw error;
		}
	}
}
