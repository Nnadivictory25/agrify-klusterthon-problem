import FeatureOne from '@/components/assets/features/featrue-one';
import FeatureFour from '@/components/assets/features/feature-four';
import FeatureThree from '@/components/assets/features/feature-three';
import FeatureTwo from '@/components/assets/features/feature-two';
import CurlyLine from '@/components/assets/misc/curly-line';
import LeftStar from '@/components/assets/misc/left-star';
import RightStar from '@/components/assets/misc/right-star';
import { team } from '../../lib/store';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Header from '@/components/ui/site-header';
import Footer from '@/components/ui/site-footer';

const HomePage = () => {
	const features = [
		{
			element: <FeatureOne />,
			title: 'AI Powered Decision Support',
			desc: 'Leveraging cutting-edge AI algorithms to offer intelligent solutions',
			color: '#F4DCF4',
		},
		{
			element: <FeatureTwo />,
			title: 'Customized Farming Solutions',
			desc: "Tailoring solutions to individual farms' needs for enhanced productivity",
			color: '#e3f8e7',
		},
		{
			element: <FeatureThree />,
			title: 'Advanced Crop Analytics',
			desc: 'Providing in-depth insights into crop health for optimized cultivation',
			color: '#e1e7f9',
		},
		{
			element: <FeatureFour />,
			title: 'Expert Crop Consultation',
			desc: "Utilize Agrify's AI for harnessing data-driven insights and features",
			color: '#fde7e7',
		},
	];

  return (
    
    <Fragment>
      <Header />
			<section className='w-full flex justify-center pt-[86px] pb-[40px]'>
				<div className='relative w-full wrapper flex justify-center'>
					<div className='w-[700px] flex flex-col items-center '>
						<p className='mb-[24px] bg-primary/10 border-primary border-[1px] rounded-xl px-[8px] py-[1px] text-sm'>
							Harvest Your Dreams
						</p>
						<h1 className='text-center text-[88px] text-primary leading-[96px] font-[500] tracking-[-2.5px] mb-[12px]'>
							Farming made smart with Agrify
						</h1>
						<p className='text-center text-[20px] leading-[32px] tracking-[-0.3px]'>
							Maximize yields, optimize resource allocation and propelling your
							agricultural enterprise to unprecedented efficiency.
						</p>
						<Link
							href='/sign-up'
							className='my-[24px] rounded-[44px] btn tracking-[-0.2px] py-[8px] px-[24px] text-[16px] font-medium leading-[32px] flex justify-center items-center hover:bg-gray-900'>
							Get started with Agrify
						</Link>
						<div className='flex justify-evenly items-center space-x-[8px]'>
							<CurlyLine fill='#030712' />
							<p className='text-[12px]'>
								Empowering farmers towards sustainable cultivation.
							</p>
						</div>
					</div>
					<LeftStar className='absolute left-[15rem] top-[4rem]' />
					<RightStar className='absolute right-[16.25rem]' />
				</div>
			</section>

			<section className='w-full flex justify-center'>
				<div className='wrapper flex justify-center items-center'>
					<section className='max-w-[950px] w-[90%] flex flex-wrap justify-center sm:gap-5'>
						{features.map(({ element, color, desc, title }) => (
							<div
								key={title}
								className='border-[1px] border-gray-200 p-[24px] space-x-[16px] flex items-start text-[16px] leading-[32px] rounded-[8px] mb-[24px]'>
								<div
									style={{ backgroundColor: color }}
									className='bg-purple-100 rounded-full p-3 h-[48px] w-[48px] flex justify-center items-center'>
									{element}
								</div>
								<div className='flex flex-col space-y-[4px] max-w-[303px]'>
									<p className='font-medium'>{title}</p>
									<p className='text-gray-600'>{desc}</p>
								</div>
							</div>
						))}
					</section>
				</div>
			</section>

			<section className='w-[90%] mx-auto flex flex-col items-center mt-[46px] mb-[90px]'>
				<h1 className='text-[64px] leading-[72px] tracking-[-1.6px] text-center  font-medium mb-[24px]'>
					Meet the team
				</h1>
				<p className='text-[20px] leading-[32px] text-gray-600 mb-[64px]'>
					Get Acquainted with Our Exceptional Team Behind the Agricultural
					Revolution!
				</p>
				<div className='w-full flex justify-center '>
					<div className='w-full wrapper flex justify-center'>
						<div className='w-full space-[24px] gap-5 flex-wrap flex items-center justify-center max-w-[858px]'>
							{team.map(({ desig, img, link, name }) => (
								<div
									key={name}
									className='sm:w-1/4 w-full flex flex-col text-center items-center border-gray-200 border-[1px] p-[30px] rounded-[36px] text-[16px]'>
									<div className='h-[100px] w-[100px] rounded-full border-[1px] mb-[16px] overflow-hidden relative'>
										<Image src={img} alt='team-profile-photo' fill />
									</div>
									<p>{name}</p>
									<p>{desig}</p>
									<Link
										href={link}
										target='_blank'
										className='mt-[12px] border-gray-200 border-[1px] px-4 py-1 rounded-3xl text-[14px] hover:border-gray-300'>
										Know more
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
      </section>
      <Footer />
		</Fragment>
	);
};

export default HomePage;
