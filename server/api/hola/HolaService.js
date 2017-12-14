'use strict';

class HolaService {
	getGreat(name) {
		return Promise.resolve(`hola ${name}`);
	}
}

module.exports = HolaService;
