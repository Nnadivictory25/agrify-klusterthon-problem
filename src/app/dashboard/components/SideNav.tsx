'use client';
import { Logo } from '@/components/ui/site-header';
import { ArrowUpRight, Bot, ChevronRight, CloudHail, Home, Sprout, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const links = [
	{
		slug: 'Dashboard',
		path: '/dashboard',
		icon: <Home className='w-5 h-5 my-auto' />,
	},
	{
		slug: 'Weather',
		path: '/dashboard/weather',
		icon: <CloudHail className='w-5 h-5 my-auto' />,
	},
	{
		slug: 'My Farm',
		path: '/dashboard/farm',
		icon: <Sprout className='w-5 h-5 my-auto' />,
	},
	{
		slug: 'Chat With AI',
		path: '/dashboard/chat-ai',
		icon: <Bot className='w-5 h-5 my-auto' />,
	},
];

const SideNav = () => {
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
    
    const sidebarOpen = searchParams.get('sidebarOpen') == 'true';

	return (
		<nav
			id='sidebar'
			className={`w-[250px] px-3 py-4 z-20 fixed ${
				sidebarOpen ? '' : 'hidden'
			}  sm:block left-0 top-0 h-screen bg-white border-r`}>
			<div className='flex items-center justify-between'>
				<Logo />
				<X
					onClick={() =>
						router.push(
							pathname + '?' + createQueryString('sidebarOpen', 'false')
						)
					}
					className='sm:hidden'
				/>
			</div>

			<div className='mt-7 flex flex-col gap-4'>
				{links.map(({ slug, path, icon }, index) => {
					return (
						<Link
							key={index}
							className={`flex ${pathname === path && "active"} items-center justify-between transition-colors text-gray-600 rounded-md p-2 hover:text-gray-400`}
							href={path}>
							<div className='flex items-center gap-2'>
								{icon}
								<p>{slug}</p>
							</div>
							<ChevronRight />
						</Link>
					);
				})}
			</div>

			<div className='footer fixed bottom-4 text-xs to-gray-500'>
				<a href='/contact' className='flex items-center'>
					Contact Support <ArrowUpRight size={14} />
				</a>
			</div>
		</nav>
	);
};

export default SideNav;
