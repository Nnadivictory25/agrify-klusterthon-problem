import React from 'react';
import Framwise from '../assets/logo/farmwise-logo';
import Link from 'next/link';

const Header = () => {
	return (
		<header className='w-full pt-6 sm:px-[60px] px-10 '>
      <div className='flex flex-row items-center wrapper justify-between'>
        <Logo />
				<nav className='my-0 mx-auto'>
					<ul className='flex items-center gap-x-6'>
						<li className='navlink hidden sm:block'>
							<Link href='/'>Home</Link>
						</li>
						<li className='navlink anim font-bold'>
							<Link href='/ask-ai'>Ask AI</Link>
						</li>
						<li className='navlink hidden sm:block'>
							<Link target='_blank' href='https://www.kluster.africa/'>
								Kluster
							</Link>
						</li>
						<li className='navlink hidden sm:block'>
							<Link
								target='_blank'
								href='https://www.kluster.africa/klusterthon'>
								Klusterthon
							</Link>
						</li>

						<li className='btn rounded-full text-sm hidden sm:block'>
							<Link href='/sign-up' className='block px-6 py-3'>
								Get Started
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export const Logo = () => {
	return (
		<Link className='flex items-center navlink space-x-2' href='/'>
			<Framwise />
			<p className='font-bold uppercase text-primary text-xl tracking-widest'>
				Agrify
			</p>
		</Link>
	);
};

export default Header;
