const express = require('express');
const router = express.Router();
const pubAccountController = require('../controllers/pubAccount.controller')




router.post('/pubAccount',pubAccountController.pubAccount);






module.exports = router;