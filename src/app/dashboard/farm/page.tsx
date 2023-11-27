import { getFarmProduces } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import AddProduceBtn from './components/AddProduceBtn';
import FarmCard from './components/FarmCard';

const page = async () => {
	const { userId } = auth();

	if (!userId) {
		return null;
	}

	const produces = await getFarmProduces(userId);

	if (produces.length === 0) {
		return (
			<div className='center'>
				<p className='font-medium'>
					You have not added any of your farm produce here yet :(
				</p>
				<AddProduceBtn />
			</div>
		);
	}

	return (
		<div>
			<p className='font-semibold mb-5'>My Farm</p>

			<div className='flex flex-wrap gap-4'>
				{produces.map((p) => (
					<FarmCard key={p.id} {...p} />
				))}
			</div>
		</div>
	);
};

export default page;
