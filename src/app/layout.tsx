import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import SuppressHydration from '@/components/SuppressHydration';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Agrify - Making farming easy',
	description:
		'Your AI-powered agricultural ally, offering expert guidance for farmers. Gain real-time insights, precise crop management advice, and market intelligence.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<SuppressHydration>
					<ClerkProvider>
						<main>{children}</main>
					</ClerkProvider>
				</SuppressHydration>
			</body>
		</html>
	);
}
