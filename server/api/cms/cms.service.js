'use strict';
const request = require('request-promise');
const uriParser = require('../../utils/UriParser');
const config = require('../../config');

class CmsService {
	async getDataAffiliate({siteId, dni}) {
		const url = uriParser.parser(config.endpoints.microsite, {siteId, dni});
		const options = {
			method: 'GET',
			uri: url,
			json: true
		};
		try {
			let response = request(options);
			return Promise.resolve(response);
		} catch (error) {
			return Promise.reject(error);
		}
	}
}

module.exports = CmsService;
