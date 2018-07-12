import React from 'react';
import { Grid } from 'semantic-ui-react';

import { ConnectorContainer } from '../elements';

const Bridge = () => {
	return (
		<Grid.Column mobile={16} tablet={8} computer={4}>
			<ConnectorContainer />
		</Grid.Column>
	);
};

export default Bridge;
