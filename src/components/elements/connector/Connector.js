import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Image } from 'semantic-ui-react';

const Connector = props => {
	return (
		<React.Fragment>
			<Grid.Row only="large screen tablet computer widescreen">
			<Image src={props.webUri} />
			</Grid.Row>
			<Grid.Row only="mobile">
				<Button content={'Click'} onClick={props.onMobileClick} />
			</Grid.Row>
			<Grid.Row>
				<a onClick={props.onCancel}>Cancel</a>
			</Grid.Row>
		</React.Fragment>
	);
};

Connector.propTypes = {
	onCancel: PropTypes.func.isRequired,
	webUri: PropTypes.string.isRequired,
	onMobileClick: PropTypes.func.isRequired
};

export default Connector;
