import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import Checkout from './containers/Checkout/Checkout';

import classes from './App.module.css';

function App() {
	return (
		<BrowserRouter>
			<div className={classes.App}>
				<Layout>
					<Switch>
						<Route path="/" exact component={Builder} />
						<Route path="/checkout" component={Checkout} />
						<Redirect from="/burgerbuilder-react" to="/" />
					</Switch>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
