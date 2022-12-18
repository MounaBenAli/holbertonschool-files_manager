import { getStatus, getStats } from '../controllers/AppController';

const express = require('express');

const router = express.Router();
router.get('/status', getStatus);
router.get('/stats', getStats);

module.exports = router;
