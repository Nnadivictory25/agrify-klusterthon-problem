import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { NewsArticle } from '../page';
import { format } from 'date-fns-tz';
import Link from 'next/link';


interface NewsArticleProps {
	article: NewsArticle;
}

const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return format(date, 'MM/dd/yyyy h:mm a', { timeZone: 'auto' });
};

function trimStringToLength(inputString: string, maxLength: number): string {
	if (inputString.length <= maxLength) {
		return inputString;
	} else {
		// Trim the string and append "..." to indicate it has been trimmed
		return inputString.substring(0, maxLength) + '...';
	}
}

const ArticleCard = ({ article }: NewsArticleProps) => {
	const {
		source: { id, name },
		author,
		title,
		description,
		url,
		urlToImage,
		publishedAt,
		content,
	} = article;

	return (
		<Link
			href={url}
			className='w-full group max-w-[320px] overflow-hidden mx-auto sm:mx-0 transition-all hover:scale-[1.01]'>
			
			<Card className='w-full shadow-sm h-full max-h-[450px]'>
				<CardHeader>
					<CardTitle>{title}</CardTitle>

					<CardDescription>Published {formatDate(publishedAt)}</CardDescription>
					<Separator className='!mt-4' />
					<CardContent>
						<div className='w-[250px] h-auto overflow-hidden mt-4'>
							<img
								loading='lazy'
								src={urlToImage}
								className='w-full mx-auto rounded-md'
							/>
						</div>
						<p className='pt-4 text-sm'>
							{trimStringToLength(description, 150)}
						</p>
					</CardContent>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default ArticleCard;
