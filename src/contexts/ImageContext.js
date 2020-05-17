import React, { createContext, useState, useEffect, Component } from 'react';

const API_KEY = '16545790-0e8100c6b2ac3c626b69e46b4';

export const ImageContext = createContext();

class ImageContextProvider extends Component {
	// const [images, setImages] = useState([]);
	// const [error, setError] = useState('');
	// const [visible, setVisible] = useState(9);

	state = {
		images: [],
		error: null,
		visible: 9,
		loadMore: false,
	};
	handleGetRequest = async (e) => {
		e.preventDefault();
		const searchValue = e.target.elements.searchValue.value;
		const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchValue}&image_type=photo&per_page=200`;

		const request = await fetch(url);
		const response = await request.json();
		if (!searchValue) {
			this.setState({ error: 'Please provide a value' });
		} else {
			this.setState({
				images: response.hits,
				error: null,
				loadMore: true,
			});
		}
	};

	componentDidMount() {
		const images = JSON.parse(localStorage.getItem('images'));
		const visible = localStorage.getItem('visible')
			? parseInt(localStorage.getItem('visible'))
			: 9;

		if (images === null || images.length === 0) {
			this.setState({ images: [], loadMore: false, visible: 9 });
		} else {
			let loadMore = true;
			if (visible >= images.length) loadMore = false;
			this.setState({ images, loadMore, visible });
		}
	}

	componentDidUpdate() {
		localStorage.setItem('images', JSON.stringify(this.state.images));
	}

	handleImageLoad = (e) => {
		let { visible, images } = this.state;
		visible += 9;
		this.setState({
			visible,
		});

		if (visible >= images.length) {
			this.setState({
				loadMore: false,
			});
		}
		localStorage.setItem('visible', visible);
	};

	render() {
		const { images, error, visible, loadMore } = this.state;
		return (
			<ImageContext.Provider
				value={{
					images: images,
					error: error,
					handleGetRequest: this.handleGetRequest,
					visible,
					handleImageLoad: this.handleImageLoad,
					loadMore,
				}}
			>
				{this.props.children}
			</ImageContext.Provider>
		);
	}
}

export default ImageContextProvider;
