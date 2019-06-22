import React from 'react';
import { Router, Route } from 'react-router-dom';

import App from './App';
import EventDetails from './EventDetails';
import ArmyDetails from './ArmyDetails';
import PaintingDetails from './PaintingDetails';

const Routes = (props) => (
	<Router {...props}>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/details" component={EventDetails} />
			<Route exact path="/army" component={ArmyDetails} />
			<Route exact path="/painting" component={PaintingDetails} />
		</div>
	</Router>
);

export default Routes;
