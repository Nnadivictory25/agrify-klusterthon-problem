"use client"
import Link from 'next/link';
import { Chat } from './page';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { format } from 'date-fns-tz';


export const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return format(date, 'MM/dd/yyyy h:mm a', { timeZone: 'auto' });
  };
  

const ChatLink = ({ id, title, createdAt }: Chat) => {
	return (
		<Link href={'/dashboard/chat-ai/' + id} className='w-full max-w-xs mx-auto sm:mx-0 transition-all hover:scale-[1.01]'>
			<Card>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					<CardDescription>
						Created by you on {formatDate(createdAt)}
					</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default ChatLink;
