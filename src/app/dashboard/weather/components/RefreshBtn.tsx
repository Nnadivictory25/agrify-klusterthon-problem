'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RefreshBtn = () => {
	const [effect, setEffect] = useState(false);
	const router = useRouter();

	function refreshData() {
		router.refresh();

		setTimeout(() => {
			setEffect(false);
		}, 1000);
	}

	return (
		<Button
			onClick={() => {
				setEffect(true);
				refreshData();
			}}
			className='active:scale-90 transition-all'
			title='Refresh Weather Data'
			variant={'secondary'}>
			<RefreshCcw className={effect ? 'spin' : ''} />
		</Button>
	);
};

export default RefreshBtn;
