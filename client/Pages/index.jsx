import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';
import Home from '../containers/Home';
import About from '../containers/About';
import Error404 from '../containers/Error404';

const Pages = () => {
	return (
		<Router>
			<div>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/Not found">A</Link></li>
				</ul>
				<hr />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route component={Error404} />
				</Switch>
			</div>
		</Router>
	);
};

export default Pages;
