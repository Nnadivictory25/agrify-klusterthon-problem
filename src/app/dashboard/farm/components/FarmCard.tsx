import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { format } from 'date-fns-tz';

export interface FarmProduce {
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
	crop,
	variety,
	cultivatedAt,
	quantity,
	unit,
	createdAt,
}: FarmProduce) => {
	return (
		<div className='w-full max-w-sm mx-auto sm:mx-0 '>
			<Card className='bg-gradient !text-white w-full shadow-sm'>
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
                                <p>{quantity} <span className='lowercase'>{unit}</span></p>
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
