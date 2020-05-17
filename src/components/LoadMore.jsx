import React, { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';

const LoadMore = () => {
	const { loadMore, handleImageLoad } = useContext(ImageContext);
	return (
		<button
			className='load-more'
			style={{ display: loadMore ? 'inline-block' : 'none' }}
			onClick={handleImageLoad}
		>
			Load More
		</button>
	);
};

export default LoadMore;
