'use strict';
const HolaService = require('./HolaService');
const service = new HolaService();

class HolaController {
	static async getGreat(req, res) {
		const great = await service.getGreat('Andrey');
		res.send(great);
	}
}

module.exports = HolaController;
