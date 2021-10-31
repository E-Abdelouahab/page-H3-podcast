const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SuperAdmin = require('../models/superAdmin.model');
const doctor = require('../models/doctor.model');
const assSec = require('../models/assSec.model');
const { inputValidationSchema  } = require("./XssValidation");

//______________________get all SuperAdmin__________________________ 
const getAllSuperAdmins = (req, res) => {
        SuperAdmin.find()
        .then(superAdmin => {
              res.status(200).json(superAdmin);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      };
//_______________________ Super Admin authentication________________________

const addSuperAdmin = (req, res) => {

  let error = [];


  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };
       
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
            if (err) {
              res.json({error : err})    
            }
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const SuperAdminPush = new SuperAdmin({
          firstName,
          lastName,
          email,
          login,
          password,  
        });
        SuperAdminPush
          .save()
          .then(() => res.json("SuperAdmin authentication successfully"))
          .catch((err) => res.status(400).json("Error :" + err));
      });
      }
      
      //-------------------------login Super Admin-----------------------------
      
      const loginSuperAdmin = (req, res) => {
      
        let error = [];

        
        const { err } = inputValidationSchema.validate(req.body)
        if (err) {
      
                
      
                error.push(err.details[0].message);
                return res.json({
      
                        error : error
                }) 
      
        };

        let login=req.body.login;
        let password=req.body.password;
      
      SuperAdmin.findOne({login : login})
      .then(superadmin => {
      
      if(superadmin){
        bcrypt.compare(password, superadmin.password, function(err, result){
            if (err) {
                res.json({
                  error : err
                })
              }
           if(result){
              let token=jwt.sign({login :login},'tokenkey',(err,token) => {
                res.cookie("token", token)  
                res.json({
                    token : token
                })
              })
           }
           
        })
      }else{
        res.json({
            message : 'SuperAdmin not found'
        })
      }
      }).catch((err) => res.status(400).json("Error :" + err));
      }

 //-------------------------logout Super Admin and remove token-----------------------------   
     const logout = (req, res) => {
        const deconnect = res.clearCookie("token")
      
        res.json({
            message: 'User is Signout !!'
        })
      }
      

//__________________________add Doctor____________________
const adddoctor = (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
                if (err) {
                  res.json({error : err})    
                }
            const firstName = req.body.firstName;
            const lastName = req.body.lastName;
            const email = req.body.email;
            const login = req.body.login;
            const password = hashPassword;
        
            const doctorPush = new doctor({
              firstName,
              lastName,
              email,
              login,
              password,
        
            });
            doctorPush
              .save()
              .then(() => res.json("doctor authentication successfully"))
              .catch((err) => res.status(400).json("Error :" + err));
            });
            };
      
      //______________________get all Doctors _____________________ 
const getAlldoctor = (req, res) => {
        doctor.find()
        .then(doctor => {
              res.status(200).json(doctor);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
      };
      
      //______________________Delete Doctor_____________________ 
const deletedoctor = (req, res) => {
        const {id} = req.params;
        doctor.findOneAndDelete({_id: id})
            .then(doctor => {
                if(!doctor) {
                  res.status(404).json({
                    message: "Does Not exist a doctor with id = " + id,
                    error: "404",
                  });
                }
                res.status(200).json({});
            }).catch(err => {
                return res.status(500).send({
                  message: "Error -> Can NOT delete a categorie with id = " + id,
                  error: err.message
                });
            });
      };
      
      //________________________updating Doctor____________________
      
const updatedoctor = (req, res) => {
        bcrypt.hash(req.body.password, 10, function(err, hashPassword) {
        if (err) {
          res.json({error : err})       
        }
      const firstName = req.body.firstName;
      const lastName = req.body.lastName;
      const email = req.body.email;
      const login = req.body.login;
      const password = hashPassword;
        doctor.updateOne(
          {_id: req.params.id},
          {
        firstName: req.body.firstName,
        LastName: req.body.lastName,
        email: req.body.email,
        login: req.body.login,
        password: hashPassword,
      
      })
      
      .then(doctor => {
        if(!doctor) {
      
          return res.status(404).send({
            message: "Doctor not found with id " + req.params._id
        });
      
        }
        res.status(201).json("Doctor UPDATED successfully");
      }).catch(err => {
      
        if(err.kind === 'ObjectId') {
          return res.status(404).send({
              message: "Doctor not found with id " + req.params.id
          });                
      }
      return res.status(500).send({
          message: "Error updating Doctor with id " + req.params.id
        });
        })
      });
      }
      
      
      // ______________________get Doctor by id__________________
const getdoctorById = (req, res) => {
  doctor.findById(req.params.id)
                  .then((doctor) => res.json(doctor))
                  .catch((err) => res.status(400).json("Error :" + err));
      };
      
      


//______________________get all AssSec_____________________ 
const getAllassSec = (req, res) => {
  assSec.find()
        .then(assSecInfos => {
              res.status(200).json(assSecInfos);
            }).catch(error => {
              console.log(error);
              res.status(500).json({
                  message: "Error!",
                  error: error
              });
            });
    };
    

 //________________________updating AssSec____________________
const updateassSec = (req, res) => {
        // Find AssSec By ID and update it
        assSec.updateOne(
                         {_id: req.params.id},
                          {
                            status : req.body.status,
                            type : req.body.type
                          }
                        )
        .then(() => res.status(201).json("assSec updated successfully"))
        .catch((err) => res.status(400).json("Error :" + err));
      };
      // ______________________get AssSec by id__________________
const getassSecById = (req, res) => {
  assSec.findById(req.params.id)
            .then(assSec => {
              res.status(200).json(assSec);
            }).catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "assSec not found with id " + req.params.id,
                        error: err
                    });                
                }
                return res.status(500).send({
                    message: "Error retrieving assSec with id " + req.params.id,
                    error: err
                });
            });
      };
              
      //______________________Delete AssSec _____________________ 
      const deleteassSec = (req, res) => {
        const {id} = req.params;
        assSec.findOneAndDelete({_id: id})
            .then(doctor => {
                if(!doctor) {
                  res.status(404).json({
                    message: "Does Not exist assSec with id = " + id,
                    error: "404",
                  });
                }
                res.status(200).json({});
            }).catch(err => {
                return res.status(500).send({
                  message: "Error -> Can NOT delete a assSec with id = " + id,
                  error: err.message
                });
            });
      };
      



module.exports={
  getAllSuperAdmins,addSuperAdmin,loginSuperAdmin,logout,adddoctor,getAlldoctor,deletedoctor,updatedoctor,getdoctorById,getAllassSec,updateassSec,getassSecById,deleteassSec
};