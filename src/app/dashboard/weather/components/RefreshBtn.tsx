'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RefreshCcw } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RefreshBtn = () => {
    const [effect, setEffect] = useState(false);
    const router = useRouter()

    function refreshData() {
        router.refresh()

        setTimeout(() => {
            setEffect(false)
        }, 1000);
    }

	return (
		<div className='flex justify-end mb-4'>
			<Button
                onClick={() => {
                    setEffect(true)
                    refreshData()
                }}
				title='Refresh Weather Data'
				variant={'secondary'}>
				<RefreshCcw
					className={effect ? 'spin' : ''}
				/>
			</Button>
		</div>
	);
};

export default RefreshBtn;
