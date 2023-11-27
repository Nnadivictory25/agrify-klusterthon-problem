'use client';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog';
import AddProduceForm from './AddProduceForm';

const AddProduceBtn = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	const modalOpen = searchParams.get('addingProduce') == 'true';

	return (
		<div>
			<Button
				onClick={() =>
					router.push(
						pathname + '?' + createQueryString('addingProduce', 'true')
					)
				}
				className='flex items-center gap-1 transition-all active:scale-90'>
				Add Produce <Plus size={20} />
			</Button>

			<Dialog
				open={modalOpen}
				onOpenChange={(open) => {
                    if (!open) {
                        router.push(pathname);
                    }
				}}>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Add Produce</DialogTitle>
					</DialogHeader>
					<AddProduceForm />
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddProduceBtn;
