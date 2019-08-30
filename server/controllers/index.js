const express = require('express');

const router = express.Router();

const { getData } = require('./cities');

router.get('/cities', getData);

module.exports = router;
