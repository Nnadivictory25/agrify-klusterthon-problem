import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "system",
        content:
          "Your name is 'Agrify'. You are a helpful assistant that assists farmers in making informed decisions. Your job is to provide expert advice on crop management, market insights, and real-time problem-solving.",
      },
      ...messages,
    ],
  });

  const stream = await OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
