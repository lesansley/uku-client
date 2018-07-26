import * as api from '../../../utils/api';

const abortController = new window.AbortController();
const signal = abortController.signal;

const loginUser = async ({ userLogin, history }) => {
	const response = await api.requestApi(
		{
			type: 'request',
			attributes: ['name']
		},
		signal
	);
	const { mobile, ref, web } = response;
	history.push({
		pathname: '/connect',
		state: { web, mobile, ref }
	});
};

export default loginUser;
