import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Activity, ChevronRight, Newspaper } from 'lucide-react';
import Link from 'next/link';

const ReadArticleCard = () => {
	return (
		<div className='w-full max-w-[320px] h-[140px] mx-auto sm:mx-0 relative'>
			<Card className='bg-gradient !text-white w-full h-full shadow-sm'>
				<CardHeader>
					<CardTitle className='flex items-center justify-between gap-7'>
						<p>There are newarticles available to read</p>
						<Newspaper />
					</CardTitle>

					<CardDescription className='!text-slate-50'></CardDescription>
					<CardContent>
						<Link
							href={'/dashboard/articles'}
							className='text-sm text-slate-100 flex items-center absolute bottom-5 transition-all hover:text-slate-300'>
							<p>Go to articles </p>
							<ChevronRight size={20} />
						</Link>
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default ReadArticleCard;
