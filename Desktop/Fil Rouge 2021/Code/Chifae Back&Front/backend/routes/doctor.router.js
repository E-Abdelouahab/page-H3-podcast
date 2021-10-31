const express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctor.controller');


router.get('/doctor', doctorController.getAlldoctor)
router.post('/login', doctorController.logindoctor);
router.post('/adddelegation', doctorController.adddelegation);
router.get('/getdelegationById/:id', doctorController.getdelegationById);
router.get('/getAlldelegation', doctorController.getAlldelegation)
router.put('/updatedelegation/:id', doctorController.updatedelegation);
router.delete('/deletedelegation/:id', doctorController.deletedelegation);
router.put('/validateintiative/:id', doctorController.validateintiative);
router.get('/getAllintiative', doctorController.getAllintiative);
router.get('/getintiativeById/:id',doctorController.getintiativeById);
router.delete('/deleteintiative/:id', doctorController.deleteintiative);
router.get('/logout', doctorController.logout);




module.exports = router;
