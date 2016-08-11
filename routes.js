'use strict';

const express = require('express');

let router = express.Router();

router.use('/', require('./api/routes.js'));

module.exports = router;