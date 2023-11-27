import Forecasts from './components/Forecasts';
import RefreshBtn from './components/RefreshBtn';
import Time from './components/Time';

const page = () => {
	return (
		<div>
			<div className='flex justify-between mb-4 items-center '>
				<Time />
				<RefreshBtn />
			</div>
			<Forecasts />
		</div>
	);
};

export default page;
