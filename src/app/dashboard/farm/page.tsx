import { getFarmProduces } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs';
import { Plus } from 'lucide-react';
import AddProduceBtn from './components/AddProduceBtn';

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
			<p className='font-semibold'>My Farm</p>
		</div>
	);
};

export default page;
