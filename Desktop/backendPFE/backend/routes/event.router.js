const express = require('express');
const router = express.Router();
const eventController = require('../controllers/event.controller');



router.get('/geteventByCategory/:category',eventController.geteventByCategory);




module.exports = router;