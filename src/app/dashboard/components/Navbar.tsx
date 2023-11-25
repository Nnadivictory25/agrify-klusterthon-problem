'use client';
import { UserButton } from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';
import { Menu } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const Navbar = () => {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const { user } = useUser();

	const createQueryString = useCallback(
		(name: string, value: string) => {
			const params = new URLSearchParams(searchParams);
			params.set(name, value);

			return params.toString();
		},
		[searchParams]
	);

	return (
		<nav className='sm:w-[calc(100%-250px)] z-20 w-full fixed px-5 top-0 right-0 flex items-center justify-between h-14 border-b'>
			<div className='flex item-center gap-x-3'>
				<Menu
					onClick={() =>
						router.push(
							pathname + '?' + createQueryString('sidebarOpen', 'true')
						)
					}
					className='sm:hidden my-auto'
				/>
				<h2 className='font-bold text-xl'>
					Hello, {user?.firstName || user?.lastName} 👋
				</h2>
			</div>
			<div className='flex items-center gap-5'>
				<UserButton />
			</div>
		</nav>
	);
};

export default Navbar;
