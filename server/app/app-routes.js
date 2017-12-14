const express = require('express');
const router = express.Router();
const HolaService = require('../api/hola/HolaService');
const service = new HolaService();

router.get('/', async (req, res) => {
	res.render('home', { 'great': await service.getGreat('Home') });
});

module.exports = router;
