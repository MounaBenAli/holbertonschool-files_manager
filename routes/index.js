import { getStatus, getStats } from '../controllers/AppController';
import { postNew } from '../controllers/UsersController';

const express = require('express');

const router = express.Router();

router.get('/status', getStatus);
router.get('/stats', getStats);
router.post('/users', postNew);

module.exports = router;
