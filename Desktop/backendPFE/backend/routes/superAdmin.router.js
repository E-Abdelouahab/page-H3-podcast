const express = require('express');
const router = express.Router();
const SuperAdminController = require('../controllers/superAdmin.controller');



router.post('/authentication',SuperAdminController.addSuperAdmin);
router.post('/login', SuperAdminController.loginSuperAdmin);
router.get('/logout', SuperAdminController.logout);
router.post('/adddoctor',SuperAdminController.adddoctor);
router.get('/getAlldoctor',SuperAdminController.getAlldoctor);
router.get('/getAllassSec',SuperAdminController.getAllassSec);
router.get('/getAllSuperAdmins',SuperAdminController.getAllSuperAdmins);
router.delete('/deletedoctor/:id',SuperAdminController.deletedoctor);
router.delete('/deleteassSec/:id',SuperAdminController.deleteassSec);
router.put('/updatedoctor/:id',SuperAdminController.updatedoctor);
router.get('/getdoctorById/:id',SuperAdminController.getdoctorById);
router.put('/updateassSec/:id',SuperAdminController.updateassSec);
router.get('/getassSecById/:id',SuperAdminController.getassSecById);

module.exports = router;


