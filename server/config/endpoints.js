'use strict';
const config = require('./env');

const endpoints = {
	microsite: `${config.cmsBasePatch}/microsite/:siteId/affiliates/:dni`
};

module.exports = Object.assign({}, endpoints);
