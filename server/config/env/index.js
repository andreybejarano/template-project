'use strict';
const env = process.env.NODE_ENV || 'develop';
const config = require(`./${env.toLowerCase()}`);

module.exports = config;
