import { Logo } from '@/components/ui/site-header';
import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='flex bg-primary/20 h-[100dvh] flex-col gap-5 justify-center items-center'>
			<Logo />
			<SignIn />
		</div>
	);
}
