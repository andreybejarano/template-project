const test = require('ava');
const CmsService = require('../../server/api/cms/cms.service');
const nock = require('nock');
const stubs = require('./stubs');
const options = {
	endpoints: {
		microsite: 'http://cms.test/api/v2'
	}
};

test.beforeEach(t => {
	t.context.service = new CmsService();
});

test('Get data check dni affiliate', async t => {
	const service = t.context.service;
	let affiliate = stubs.getDataAffiliate();
	const siteId = affiliate.data.company.id;
	const dni = affiliate.data.member.code;
	t.is(typeof service.getDataAffiliate, 'function');
	nock(options.endpoints.microsite)
		.get(`/microsite/${siteId}/affiliates/${dni}`)
		.reply(200, affiliate);
	let result = await service.getDataAffiliate({ siteId, dni });
	t.deepEqual(result, affiliate);
});
