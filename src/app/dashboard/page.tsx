import { auth } from '@clerk/nextjs';
import { getFarmProducesCount } from '../actions';
import FarmMonitorCard from './components/FarmMonitorCard';
import PestAlertCard from './components/PestAlertCard';
import ReadArticleCard from './components/ReadArtcleCard';

const page = async () => {
	const { userId } = auth();

	if (!userId) {
		return null;
	}

	const producesCount = await getFarmProducesCount(userId);

	return (
		<div>
			<p className='font-semibold text-lg sm:px-5 px-4 mb-7'>Your dashboard</p>
			<div className='flex items-center justify-evenly flex-wrap gap-4'>
				<FarmMonitorCard producesCount={producesCount} />
				<PestAlertCard />
				<ReadArticleCard />
			</div>
		</div>
	);
};

export default page;
