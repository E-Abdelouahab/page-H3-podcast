const express = require('express');
const router = express.Router();
const assSeccontroller = require('../controllers/assSec.controller');


router.post('/addassSec', assSeccontroller.addassSec)
router.post('/login', assSeccontroller.loginassSec);
router.post('/addevent', assSeccontroller.addevent);
router.get('/getAllevent', assSeccontroller.getAllevent);
router.delete('/deleteevent/:id', assSeccontroller.deleteevent);
router.put('/updateevent/:id', assSeccontroller.updateevent);
router.get('/geteventById/:id', assSeccontroller.geteventtById);
router.get('/logout', assSeccontroller.logout);
router.get('/geteventByassSecname/:idAss', assSeccontroller.geteventByassSecname);



module.exports = router;
