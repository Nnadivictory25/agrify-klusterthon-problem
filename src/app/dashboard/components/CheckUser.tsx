'use client';

import { userHasCompleteProfile } from '@/app/actions';
import { useAuth } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
import OnboardForm from './OnboardForm';
import Modal from './Modal';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CheckUser = () => {
	const { userId } = useAuth();
	const [userIsComplete, setUserIsComplete] = useState(true);
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		const checkUser = async () => {
			if (userId) {
				setUserIsComplete(
					await fetch('/api/user?userId=' + userId).then((res) => res.json())
				);
			}
		};

		checkUser();

		if (!userIsComplete) {
			router.push(pathname + '?onboard=true');
		} else {
			router.push(pathname)
		}
	}, [userId, userIsComplete]);

	if (userIsComplete) return null;

	return <Modal />
	
};

export default CheckUser;
