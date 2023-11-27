'use client';

import SendArrow from '@/components/assets/misc/send-arrow';
import { MemoizedReactMarkdown } from '@/components/ui/MemoizedReactMarkdown';
import Greetings from '@/components/ui/greetings';
import { Message } from 'ai/react';
import Header from '@/components/ui/site-header';
import useAutosizeTextArea from '@/lib/hooks/useAutoSizeTextArea';
import { useAuth } from '@clerk/nextjs';
import { useChat } from 'ai/react';
import React, { useEffect, useRef, useState } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import { Chat } from '../dashboard/chat-ai/page';

async function getInitialMessages(chatId: string, userId: string) {
	const res = await fetch('/api/chats?userId=' + userId);
	const chats: Chat[] = await res.json();

	const currChat = chats.find((c) => c.id === chatId);

	if (currChat && currChat.chat) {
		return JSON.parse(currChat.chat) as Message[];
	} else {
		return [];
	}
}

function scrollToBottom(containerRef: React.RefObject<HTMLElement>) {
	if (containerRef.current) {
		const lastMessage = containerRef.current.lastElementChild;
		if (lastMessage) {
			const scrollOptions: ScrollIntoViewOptions = {
				behavior: 'smooth',
				block: 'end',
			};
			lastMessage.scrollIntoView(scrollOptions);
		}
	}
}

export const ChatInterface = ({ chatId }: { chatId?: string }) => {
	const [isStreaming, setIsStreaming] = useState(false);
	const chatContainerRef = useRef<HTMLDivElement | null>(null);
	const isHome = location.pathname === '/ask-ai';
	const [initialMessages, setInitialMessages] = useState<Message[]>();
	const { userId } = useAuth();

	const body = {
		userId,
		chatId,
    };
    
	useEffect(() => {
		async function setChats() {
			if (chatId && userId) {
				setInitialMessages(await getInitialMessages(chatId, userId));
			}
		}

		setChats();
    }, []);
    
    const { input, handleInputChange, handleSubmit, isLoading, messages } =
    useChat({
        onResponse: () => setIsStreaming(true),
        onFinish: () => setIsStreaming(false),
        initialMessages,
        body,
    });

	useEffect(() => {
		scrollToBottom(chatContainerRef);
	}, [messages]);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	useAutosizeTextArea(textAreaRef.current, input);

	return (
		<>
			{isHome && <Header />}
			<section className='w-full mt-[50px] flex justify-center'>
				<div
					className={`${
						isHome ? 'w-[90%]' : 'w-full'
					} max-w-[960px] pb-16 pt-0 flex flex-col items-center`}>
					<div ref={chatContainerRef} className='chat-ctn'>
						{!messages.length ? (
							<Greetings />
						) : (
							messages.map(({ content, role, id }) =>
								role === 'user' ? (
									<div
										key={id}
										style={{ alignSelf: 'flex-end' }}
										className='userChatLine'>
										{content}
									</div>
								) : (
									<MemoizedReactMarkdown
										key={id}
										className='aiChatLine'
										remarkPlugins={[remarkGfm, remarkMath]}
										components={{
											p({ children }) {
												return <p className='!mb-3 last:mb-0'>{children}</p>;
											},
										}}>
										{content}
									</MemoizedReactMarkdown>
								)
							)
						)}

						{isLoading && !isStreaming && (
							<div style={{ alignSelf: 'flex-start' }} className='aiChatLine'>
								<PulseLoader color='#fff' size={5} />
							</div>
						)}
					</div>

					<form onSubmit={handleSubmit} className='w-full flex justify-center'>
						<div className='inputCtn'>
							<textarea
								ref={textAreaRef}
								onChange={handleInputChange}
								className='w-full py-[8px] px-[16px] text-[16px] overflow-y-auto chat max-h-[125px]'
								placeholder="Ask me anything related to farming, and let's cultivate success together..."
								value={input}
								rows={1}
							/>
							<button type='submit' disabled={isStreaming}>
								<SendArrow />
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	);
};
