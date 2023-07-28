const express = require('express');

const nftController = require('../controllers/nft');

const router = express.Router()

// GET /feed/posts
router.get('/nfts', nftController.getNft);

// POST /feed/post

router.post('/mint', nftController.createNft);

module.exports = router;