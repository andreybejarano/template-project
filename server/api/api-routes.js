const express = require('express');
const router = express.Router();
const HolaController = require('./hola/HolaController');

router.get('/hola', HolaController.getGreat);

module.exports = router;
