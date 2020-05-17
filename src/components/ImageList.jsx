import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ImageContext } from '../contexts/ImageContext';
import ImageSearch from './ImageSearch';
import LoadMore from './LoadMore';

const ImageList = () => {
	const { images, visible } = useContext(ImageContext);
	return (
		<Fragment>
			<ImageSearch />
			<div className='container'>
				<div className='row'>
					{images.slice(0, visible).map((image) => {
						return (
							<div
								key={image.id}
								className='col-md-4'
								style={{ marginBottom: '2rem' }}
							>
								<div className='imageList__container'>
									<img
										className='imageList__image'
										src={image.largeImageURL}
										alt={image.tags}
									/>
								</div>
								<div className='image__details'>
									<button>
										<Link
											to={{
												pathname: `/image/${image.id}`,
												state: { image: image },
											}}
										>
											{' '}
											View{' '}
										</Link>
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<LoadMore />
		</Fragment>
	);
};

export default ImageList;
