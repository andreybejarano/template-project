const CmsService = require('../../server/api/cms/cms.service');
const service = new CmsService();
const nock = require('nock');
const stubs = require('./stubs');
const options = {
	endpoints: {
		microsite: 'http://cms.test/api/v2'
	}
};

describe('CMS service', () => {
	it('GET data check dni', async () => {
		let affiliate = stubs.getDataAffiliate();
		const siteId = affiliate.data.company.id;
		const dni = affiliate.data.member.code;

		expect(typeof service.getDataAffiliate).toBe('function');
		nock(options.endpoints.microsite)
			.get(`/microsite/${siteId}/affiliates/${dni}`)
			.reply(200, affiliate);
		let result = await service.getDataAffiliate({ siteId, dni });

		expect(result).toEqual(affiliate);
	});
});
