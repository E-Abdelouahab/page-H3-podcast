const express = require('express');
const router = express.Router();
const chekoutController = require('../controllers/Chekout.controller');




router.post('/checkout',  chekoutController.checkout);






module.exports = router;