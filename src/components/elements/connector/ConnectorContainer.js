import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Connect from './ConnectorActions';
import Connector from './Connector';

class ConnectorContainer extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.history.location.state;
		this.connect = new Connect();
	}

	componentDidMount() {
		this.connect.start(this.state.ref);
	}

	componentWillUnmount() {
		this.connect.close();
	}

	onCancelClick = ev => {
		ev.preventDefault();
	};

	onMobileClick = ev => {
		ev.preventDefault();
		console.log(this.state.mobile);
	};

	render() {
		return (
			<Connector
				onCancel={this.onCancelClick}
				onMobileClick={this.onMobileClick}
				webUri={this.state.web}
			/>
		);
	}
}

ConnectorContainer.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
		location: PropTypes.shape({
			state: PropTypes.shape({
				web: PropTypes.string.isRequired,
				mobile: PropTypes.string.isRequired,
				ref: PropTypes.string.isRequired
			}).isRequired
		}).isRequired
	}).isRequired
};

export default withRouter(ConnectorContainer);
