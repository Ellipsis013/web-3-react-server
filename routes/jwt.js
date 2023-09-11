const express = require('express');

const jwtController = require('../controllers/jwt');

const router = express.Router()

router.get('/Keys.json', jwtController.getJwk);
router.get('/sign', jwtController.sign);

module.exports = router;