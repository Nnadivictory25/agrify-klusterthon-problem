import { Logo } from '@/components/ui/site-header';
import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='flex h-[100dvh] bg-primary/20 flex-col gap-5 justify-center items-center'>
			<Logo />
			<SignUp />
		</div>
	);
}
