import { SignUp } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='flex h-[100dvh] justify-center items-center'>
			<SignUp />
		</div>
	);
}
