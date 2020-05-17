import React, { useContext } from 'react';
import { ImageContext } from '../contexts/ImageContext';

const ImageSearch = () => {
	const { handleGetRequest } = useContext(ImageContext);
	return (
		<div className='imageSearch'>
			<form className='imageSearch__form' onSubmit={handleGetRequest}>
				<input
					type='text'
					autoComplete='off'
					name='searchValue'
					placeholder='Search for images...'
				/>

				<button>Search</button>
			</form>
		</div>
	);
};

export default ImageSearch;
