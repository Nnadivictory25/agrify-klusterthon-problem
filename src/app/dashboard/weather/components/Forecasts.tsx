'use client';

import { Separator } from '@/components/ui/separator';
import { Circle, Gauge } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HashLoader from 'react-spinners/HashLoader';
import { WeatherApiResponse } from './types';
import barometer from '/public/barometer.png';

const endpoint =
	'https://api.openweathermap.org/data/2.5/weather?units=metric&';

const Forecasts = () => {
	const [geo, setGeo] = useState<{ lat: number; lon: number }>({
		lat: 0,
		lon: 0,
	});
	const [loading, setLoading] = useState(true);
	const [weatherData, setWeatherData] = useState<WeatherApiResponse>();

	useEffect(() => {
		if ('geolocation' in navigator) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					const lat = position.coords.latitude;
					const lon = position.coords.longitude;
					setGeo({ lat, lon });
					console.log(`Latitude: ${lat}, Longitude: ${lon}`);
				},
				(error) => {
					console.error('Error getting location:', error.message);
				}
			);
		} else {
			console.error('Geolocation is not supported by this browser');
		}
	}, []);

	useEffect(() => {
		if (geo.lat !== 0 && geo.lon !== 0) {
			async function fetchWeather() {
				const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY!;
				try {
					const res = await fetch(
						`${endpoint}lat=${geo.lat}&lon=${geo.lon}&appid=${apiKey}`
					);
					const data: WeatherApiResponse = await res.json();
					console.log(data);
					setWeatherData(data);
				} catch (error) {
					console.error(error);
					throw error;
				} finally {
					setLoading(false);
				}
			}

			fetchWeather();
		}
	}, [geo]);

	if (loading) {
		return (
			<div className='center'>
				<HashLoader color='#217756' size={30} />
				<p>Getting Weather Forecast...</p>
			</div>
		);
	}

	if ((geo.lat === 0 && !loading) || !weatherData) {
		return (
			<div className='center'>
				<p className='text-red-500'>
					An error occured while trying to fecth weather data :(
				</p>
			</div>
		);
	}

	const { weather, wind, main, clouds } = weatherData;

	return (
		<section>
			<div className='card rounded-md text-white p-4 px-7 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between bg-gradient'>
				<div className='inner-card bg-white p-5 pr-10 w-full sm:w-auto  rounded-md shadow-sm flex flex-col sm:flex-row items-center'>
					<img
						src={`http://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
					/>

					<div className='info font-medium capitalize flex flex-col gap-4 text-primary'>
						<p className='text-5xl flex font-semibold'>
							{main.temp} <Circle size={10} className='pt-[3px]' />c
						</p>
						<p className=''>{weather[0].description}</p>
						<p className='flex gap-[2px]'>
							Feels like {main.feels_like}{' '}
							<Circle size={8} className='mt-[5px]' />
						</p>
					</div>
				</div>

				<div className='info-table self-start pt-2 mx-auto w-full sm:w-auto'>
					<div className='headers flex items-center justify-between'>
						<div className='left'>
							<div className='header font-medium'>
								<p className='flex text-lg'>
									{main.temp_max}{' '}
									<Circle size={8} className='mt-[5px] pl-[1px]' />{' '}
								</p>
								<span className='uppercase text-sm'>HIGH</span>
							</div>
						</div>
						<div className='right'>
							<div className='header font-medium'>
								<p className='flex text-lg'>
									{main.temp_min}{' '}
									<Circle size={8} className='mt-[5px] pl-[1px]' />{' '}
								</p>
								<span className='uppercase text-sm'>LOW</span>
							</div>
						</div>
					</div>

					<Separator className='my-4' />

					<div className='ctn text-sm'>
						<div className='flex items-center gap-x-7'>
							<p className='font-semibold text-white'>WIND GUSTS</p>
							<p>
								<span className='font-semibold'>{wind.gust}</span> KM/H
							</p>
						</div>
						<Separator className='my-4' />
						<div className='flex items-center justify-between'>
							<p className='font-semibold text-white'>HUMIDITY</p>
							<p>
								<span className='font-semibold'>{main.humidity}</span>
							</p>
						</div>
						<Separator className='my-4' />
						<div className='flex items-center justify-between'>
							<p className='font-semibold text-white'>CLOUD COVER</p>
							<p>
								<span className='font-semibold'>{clouds.all}</span>
							</p>
						</div>
						<Separator className='my-4' />
					</div>
				</div>

				<div className='pressure bg-white sm:w-[20%] rounded-md text-black p-5 h-fit font-medium text-center shadow-sm'>
					<div className='flex items-center justify-center gap-4 text-sm'>
						<Gauge /> <p>Pressure</p>
					</div>
					<Image
						width={60}
						className='mx-auto'
						src={barometer}
						alt='barometer image'
					/>
					<p className='text-2xl font-bold'>{main.pressure}</p>
					<span>hPa</span>
				</div>
			</div>
		</section>
	);
};

export default Forecasts;
