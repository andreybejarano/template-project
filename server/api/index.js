'use strict';
const api = require('express')();
const httpStatus = require('http-status');

// Mount especific api routes
api.use('/', require('./api-routes'));

api.use((error, req, res, next) => {
	error = (error) ? Object.assign({}, {message: error.message}, error)
		: httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
	res.status(error.status).json({error});
});

module.exports = api;
