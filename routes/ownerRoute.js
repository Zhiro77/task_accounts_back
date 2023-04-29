const express = require('express');
const router = express.Router();
const OwnerController = require('../controllers/owner');

router.post('/', OwnerController.create)

module.exports = router;