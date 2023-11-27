"use client"
import { format } from 'date-fns';
import { useEffect, useState } from 'react';

function getCurrentTime() {
	const currentDate = new Date();
	return format(currentDate, 'EEEE, d MMMM yyyy h:mm a');
}

const Time = () => {
	const [currTime, setCurrTime] = useState(getCurrentTime());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrTime(getCurrentTime());
		}, 60_000);

		return () => clearInterval(intervalId);
	}, []);

	return <p className='font-medium text-lg'>{currTime}</p>;
};

export default Time;
