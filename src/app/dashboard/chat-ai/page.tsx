'use client';
import { useUser } from '@clerk/nextjs';
import { MessageCircle, Plus } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import ChatLink from './ChatLink';

export interface Chat {
	title: string;
	id: string;
	createdAt: string;
	userId: string;
	chat: string | null;
	updatedAt: string;
}

const page = () => {
	const [chats, setChats] = useState<Chat[]>();
	const [loading, setLoading] = useState(true);
	const { user } = useUser();

	useEffect(() => {
		async function getUserChats() {
			try {
				if (user) {
					const userChats: Chat[] = await fetch(
						'/api/chats?userId=' + user.id
					).then((res) => res.json());
					if (userChats) {
						setChats(userChats);
					}
				}
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		}

		getUserChats();
	}, [user]);

	if (loading)
		return (
			<div className='center'>
				<HashLoader color='#217756' size={30} />
				<p>Getting Chats...</p>
			</div>
		);

	if (!user) return null;

	return (
		<>
			{chats?.length === 0 || !chats ? (
				<div className='center'>
					<p>You have not created any chat yet :(</p>{' '}
					<form action={`/api/chats?userId=${user?.id}`} method='post'>
						<button
							type='submit'
							className='btn flex items-center px-3 py-2 rounded-md hover:bg-primary/90 transition-all'>
							New Chat <Plus size={17} />
						</button>
					</form>
				</div>
			) : (
				<div>
					<div className='flex justify-between items-center mb-5'>
						<p className='text-lg flex items-center font-semibold  gap-2'>
							Chats <MessageCircle /> ({chats.length})
						</p>
						<form action={`/api/chats?userId=${user?.id}`} method='post'>
							<button
								type='submit'
								className='btn flex items-center px-3 py-2 rounded-md hover:bg-primary/90 transition-all'>
								New Chat <Plus size={17} />
							</button>
						</form>
					</div>
					<div className='flex flex-wrap gap-4'>
						{chats.map((chat) => (
							<ChatLink key={chat.id} {...chat} />
						))}
					</div>
				</div>
			)}
		</>
	);
};

export default page;
