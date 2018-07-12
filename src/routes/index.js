import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import { About, Bridge, Home, NavBar, NoMatch, Profile } from '../components';

const routes = (
	<div>
		<NavBar />
		<Grid container centered columns={16}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/connect" component={Bridge} />
				<Route path="/profile" component={Profile} />
				<Route path="/about" component={About} />
				<Route component={NoMatch} />
			</Switch>
		</Grid>
	</div>
);

export default routes;
