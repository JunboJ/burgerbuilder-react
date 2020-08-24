import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import Layout from './containers/Layout/Layout';
import Builder from './containers/Builder/Builder';
import Checkout from './containers/Checkout/Checkout';
import Orders from './components/Orders/Orders';

import classes from './App.module.css';

function App() {
	return (
		<BrowserRouter basename="../">
			<div className={classes.App}>
				<Layout>
					<Switch>
						<Route path="/" exact component={Builder} />
						<Route path="/orders" component={Orders} />
						<Route path="/checkout" component={Checkout} />
						<Redirect to="/" />
						<Route render={() => <h3 style={{ marginLeft: '2rem' }}>Oops! Page not found! <br /><span>:(</span></h3>} />
					</Switch>
				</Layout>
			</div>
		</BrowserRouter>
	);
}

export default App;
