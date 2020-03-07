import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import Checkout from './containers/Checkout/Checkout';

import classes from './App.module.css';

function App() {
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Layout>
					<Builder />
					<Route path="/checkout">
						<Checkout />
					</Route>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
