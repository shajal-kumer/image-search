import React from 'react';
import ImageContextProvider from './contexts/ImageContext';

import ImageList from './components/ImageList';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import ImageView from './components/ImageView';

function App() {
	return (
		<div className='App'>
			<ImageContextProvider>
				<BrowserRouter>
					<Switch>
						<Route path='/:id' component={ImageView} />
						<Route exact path='/' component={ImageList} />
					</Switch>
				</BrowserRouter>
			</ImageContextProvider>
		</div>
	);
}

export default App;
