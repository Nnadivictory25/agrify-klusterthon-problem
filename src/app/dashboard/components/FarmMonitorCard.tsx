import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Activity, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const FarmMonitorCard = ({ producesCount }: { producesCount: number }) => {
	return (
		<div className='w-full max-w-[320px] h-[140px] mx-auto sm:mx-0 relative'>
			<Card className='bg-gradient !text-white w-full h-full shadow-sm'>
				<CardHeader>
					<CardTitle className='flex items-center justify-between'>
						<p>You have {producesCount} crops being monitored</p>
						<Activity />
					</CardTitle>

					<CardDescription className='!text-slate-50'></CardDescription>
					<CardContent>
						<Link href={'/dashboard/farm'} className='text-sm text-slate-100 flex items-center absolute bottom-5 transition-all hover:text-slate-300'>
							<p>Go to farm </p>
							<ChevronRight size={20} />
						</Link>
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default FarmMonitorCard;
