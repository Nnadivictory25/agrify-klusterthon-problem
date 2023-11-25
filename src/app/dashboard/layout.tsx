import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
	title: 'Agrify - Making farming easy',
	description:
		'Your AI-powered agricultural ally, offering expert guidance for farmers. Gain real-time insights, precise crop management advice, and market intelligence.',
};

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Navbar />
			<SideNav />
			<Toaster />
			<div className='mt-20 sm:ml-[250px] px-5'>{children}</div>;
		</>
	);
}
