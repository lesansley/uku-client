import config from '../config/config';
import urljoin from 'url-join';

const { apiDomain } = config;

/**
 * Requests qrCode & link from uport server
 *
 * @method requestApi
 * @param {object} payload
 *	@param {number} exp value in seconds until the request expires (default === 300)
 * 	@param {string} type request || verify
 * 	@param {array} attributes Array of attributes requested from the user e.g.['First name', 'Last name', 'Date of birth', 'Home address'] Naming conventions follow the https://schema.org schema
 *  @param {} signal
 * @returns
 */
export const requestApi = async payload => {
	console.log('Api Domain', apiDomain);
	const response = await fetch(urljoin(apiDomain, payload.type), {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			init: 1,
			payload
		})
	});
	if (response.ok) {
		return await response.json();
	}
	// Put in a redirect to an Oops page
};

export const pollRequestApi = (ref, signal) => {
	const pollApi = (resolve, reject) => {
		fetch(urljoin(apiDomain, ref), {
			signal,
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				init: 1
			})
		})
			.then(response => {
				response.json().then(res => {
					if (res.result === 'wait') {
						pollApi(resolve, reject);
					} else {
						resolve(res);
					}
				});
			})
			.catch(err => {
				if (err !== 'DOMException: The user aborted a request.')
					console.log(err);
			});
	};

	return new Promise(pollApi);
};
