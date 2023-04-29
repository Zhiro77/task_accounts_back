const express = require('express');
const router = express.Router();
const accounts = require('../controllers/account');

router.post('/', accounts.createAccount);
router.get('/', accounts.getAccounts);
router.get('/:id', accounts.getOneAccount);


module.exports = router;