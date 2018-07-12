import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as actions from '../../../actions';
import loginUser from './LoginButtonActions';
import LoginButton from './LoginButton';

class LoginButtonContainer extends Component {
	onLoginUserClick = ev => {
		ev.preventDefault();
		loginUser(this.props);
	};

	render() {
		return <LoginButton onClick={this.onLoginUserClick} />;
	}
}

LoginButtonContainer.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired
	}).isRequired
};

export default connect(
	null,
	actions
)(withRouter(LoginButtonContainer));
