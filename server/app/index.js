'use strict';

const express = require('express');
const httpStatus = require('http-status');
const config = require('../config');
const app = express();

app.set('views', `${__dirname}/views`);
app.set('view engine', 'pug');

// Set enviroment as wide application variable,
// so we can access it in views rendering explicitly
app.locals.env = config.env;

app.use('/build', express.static('build', {
	maxage: '1y'
}));

app.use(require('./app-routes'));

app.use((err, req, res, next) => {
	let status = err.status;
	if (config.env === 'production') {
		status = httpStatus.INTERNAL_SERVER_ERROR;
	}
	res.render('error', { code: status, stack: err.stack });
});

app.use((req, res) => {
	if (res.statusCode === httpStatus.NOT_FOUND) {
		res.render('error', { code: res.statusCode });
	}
});

module.exports = app;
