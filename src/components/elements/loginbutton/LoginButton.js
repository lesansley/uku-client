import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const LoginButton = ({ onClick }) => {
	return (
		<Button name="login" onClick={onClick}>
			Log in
		</Button>
	);
};

LoginButton.propTypes = {
	onClick: PropTypes.func.isRequired
};

export default LoginButton;
