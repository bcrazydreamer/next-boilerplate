"use strict";
const express = require('express');
const router = express.Router();
const { appCtrl } = require('../controller');

router.get('/', appCtrl.renderIndexPage);

module.exports = router;