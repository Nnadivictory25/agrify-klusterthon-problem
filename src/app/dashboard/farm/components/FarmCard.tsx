'use client';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { toast } from '@/components/ui/use-toast';
import { format } from 'date-fns-tz';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export interface FarmProduce {
	id: string;
	crop: string;
	variety: string | undefined | null;
	cultivatedAt: string;
	quantity: number;
	unit: string;
	createdAt: string;
}

const formatDate = (dateString: string): string => {
	const date = new Date(dateString);
	return format(date, 'MM/dd/yyyy h:mm a', { timeZone: 'auto' });
};


const FarmCard = ({
	id,
	crop,
	variety,
	cultivatedAt,
	quantity,
	unit,
	createdAt,
}: FarmProduce) => {
	const router = useRouter()


	async function deleteProduce(id: string) {
		const res = await fetch(`/api/farm?produceId=${id}`, {
			method: 'DELETE',
		});
	
		if (res.ok) {
			toast({
				title: 'Produce deleted Succesfully ✅',
				duration: 5000,
			});

			router.refresh();
		} else {
			toast({
				title: 'Something went wrong  ❌',
				description:
					'An error occured while trying to delete produce , please try again or contact support',
				duration: 5_000,
				variant: 'destructive',
			});

			router.refresh();
		}
	}
	


	return (
		<div className='w-full max-w-[320px] mx-auto sm:mx-0 '>
			<Card className='bg-gradient group !text-white w-full shadow-sm relative'>
				<div
					onClick={() => deleteProduce(id)}
					className='absolute right-4 top-4 hidden cursor-pointer group-hover:block'>
					<Trash2 />
				</div>
				<CardHeader>
					<CardTitle>{crop}</CardTitle>

					<CardDescription className='!text-slate-50'>
						Added on {formatDate(createdAt)}
					</CardDescription>
					<Separator className='!mt-7' />
					<CardContent>
						<div className='flex flex-col gap-2 !text-sm'>
							<div className='flex items-center justify-between font-medium'>
								<p className=''>Cultivated On</p>
								<p>{formatDate(cultivatedAt)}</p>
							</div>
							<Separator />
							<div className='flex items-center justify-between font-medium'>
								<p className=''>Units Planted</p>
								<p>
									{quantity} <span className='lowercase'>{unit}</span>
								</p>
							</div>
							<Separator />
						</div>
					</CardContent>
				</CardHeader>
			</Card>
		</div>
	);
};

export default FarmCard;
