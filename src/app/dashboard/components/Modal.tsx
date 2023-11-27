import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Plus } from 'lucide-react';
import OnboardForm from './OnboardForm';
import { useSearchParams } from 'next/navigation';

const Modal = () => {
	const searchParams = useSearchParams();
	const open = searchParams.get("onboard") === "true"

	
	return (
		<Dialog open={open}>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Complete Profile</DialogTitle>
				</DialogHeader>
				<OnboardForm />
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
