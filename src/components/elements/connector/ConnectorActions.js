import * as api from '../../../utils/api';

class Connect {
	abortController = new window.AbortController();
	signal = this.abortController.signal;

	async start(ref) {
		const response = await api.pollRequestApi(ref, this.signal);
		// SET STATE WITH CRED
		console.log(response);
	}

	close() {
		this.abortController.abort();
	}
}

//userLogin(cred);
// Used a manual redirect here as opposed to a wrapper.
// This way, once logged in a user can still access the home page.
//const currentLocation = window.location;

// if ('redirect' in currentLocation.query) {
//   return history.push(decodeURIComponent(currentLocation.query.redirect));
// }
// return history.push('/dashboard');

export default Connect;
