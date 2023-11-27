import HashLoader from 'react-spinners/HashLoader';

const loading = () => {
	return (
		<div className='center'>
			<HashLoader color='#217756' size={30} />
			<p>Getting Artcles...</p>
		</div>
	);
};

export default loading;
