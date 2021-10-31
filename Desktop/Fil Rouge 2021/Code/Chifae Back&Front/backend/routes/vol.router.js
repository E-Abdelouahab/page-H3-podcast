const express = require('express');
const router = express.Router();
const volController = require('../controllers/vol.controller');


router.post('/addvol', volController.addvol)
router.put('/activateComptevol/:token', volController.activateComptevol)
router.post('/loginvol', volController.loginvol)
router.get('/logout', volController.logout);




module.exports = router;