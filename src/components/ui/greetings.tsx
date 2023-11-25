import Agrify from '../assets/logo/agrify-filled-logo';

const Greetings = () => {
	return (
		<div className='relative w-full h-full flex justify-center items-center'>
			<div className='flex flex-col items-center space-y-8 mt-[90px]'>
				<Agrify />
				<p className='mt-[16px] text-sm max-w-sm text-center text-[var(--nav-color)]'>
					I am Agrify, your go-to solution harnessing the power of AI to
					revolutionize farming. I'm here to empower you, the farmers, with
					expert guidance on crop management, market trends, and instant
					solutions. Let's cultivate success together!
				</p>
			</div>

			<div className='btn flex gap-2 rounded-lg px-3 py-2 text-sm mb-[15px] leading-5 absolute top-0 left-0'>
				How can I help you today?
			</div>
		</div>
	);
};

export default Greetings;
