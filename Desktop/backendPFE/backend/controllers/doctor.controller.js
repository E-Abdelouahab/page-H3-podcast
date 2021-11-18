const doctor = require('../models/doctor.model');
const delegation  = require('../models/delegation.model')
const intiative = require('../models/intiative.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { inputValidationSchema  } = require("./XssValidation");

//-------------------------GetAll Doctor-----------------------------

const getAlldoctor = (req, res) => {
  doctor.find()
      .then(doctor=> {
        res.status(200).json(doctor);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
          message: "Error!",
          error: error
        });
      });
  };
  
//-------------------------login Doctor-----------------------------

const logindoctor = (req, res) => {
  
  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };

    let login = req.body.login;
    let password = req.body.password;
  
    doctor.findOne({
        login: login
      })
      .then(doctor => {
  
        if (doctor) {
          bcrypt.compare(password, doctor.password, function (err, result) {
            if (err) {
              res.json({
                error: err
              })
            }
            if (result) {
              let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token)
                res.json({
                  token: token,
                  login:doctor.login
                })
              })
            } 
            
          })
        } else {
          res.json({
            message: 'doctor not found'
          })
        }
      }).catch((err) => res.status(400).json("Error :" + err));
  }
 //______________________get all delegation  ______________________________________________________
const getAlldelegation  = (req, res) => {
  delegation.find()
    .then(delegationInfos => {
      res.status(200).json(delegationInfos);
    }).catch(error => {
      console.log(error);
      res.status(500).json({
        message: "Error!",
        error: error
      });
    });
};


//-------------------------Add delegation -----------------------------
const adddelegation = (req, res) => {


      const delegName = req.body.delegName;
      const telephone = req.body.telephone;
      const ville = req.body.ville;

 
      const delegationPush = new delegation({
          delegName,
          telephone,
          ville,
          
      });
      delegationPush
      
          .save()
          .then(() => res.json("delegation added successfully"))
          .catch((err) => res.status(400).json("Error :" + err));

}

//________________________updating delegation
const updatedelegation = (req, res) => {
  // Find delegation By ID and update it
  delegation.updateOne({
      _id: req.params.id
    }, {
      delegName: req.body.delegName,
      telephone:req.body.telephone,
      ville: req.body.ville,
 
    })
    .then(() => res.status(201).json("delegation  updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
};

//___________________________delete delegation______________________
const deletedelegation = (req, res) => {
  const {id} = req.params;
  delegation.findOneAndDelete({_id: id})
      .then(delegation => {
          if(!delegation) {
            res.status(404).json({
              message: "Does Not exist a delegation with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a delegation with id = ",
            error: err.message
          });
      });
};
// //________________________Get DeliveryMan By id_______________________________
const getdelegationById = (req, res) => {
  delegation.findById(req.params.id)
      .then(delegation => {
        res.status(200).json(delegation);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "delegation not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Category with id " + req.params.id,
              error: err
          });
      });
};
 //------------------------- Validate intiative ----------------------------- 
const validateintiative = (req, res) => {
    
  intiative.findByIdAndUpdate(
                   {_id: req.params.id},
                    {
                      termine : true
                    }
                  )
  .then(() => res.status(201).json("intiative updated successfully"))
  .catch((err) => res.status(400).json("Error :" + err));
};
 //-------------------------get all intiative-----------------------------  
const getAllintiative = (req, res) => {
  intiative.find()
  .then(intiativeInfos => {
        res.status(200).json(intiativeInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
};
      // ______________________get intiative by id__________________
      const getintiativeById = (req, res) => {
        intiative.findById(req.params.id)
                  .then((intiative) => res.json(intiative))
                  .catch((err) => res.status(400).json("Error :" + err));
      };
      
 //___________________________delete intiative ______________________
const deleteintiative= (req, res) => {
  const {id} = req.params;
  intiative.findOneAndDelete({_id: id})
      .then(delegation => {
          if(!delegation) {
            res.status(404).json({
              message: "Does Not exist a intiative with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a intiative with id = ",
            error: err.message
          });
      });
};     
 //-------------------------logout Doctor and remove token-----------------------------   
 const logout = (req, res) => {
  const deconnect = res.clearCookie("token")

  res.json({
      message: 'Doctor is Signout !!'
  })
} 
  module.exports={
    getAlldoctor,logindoctor,validateintiative,getAllintiative,getintiativeById,adddelegation,getdelegationById,updatedelegation,deletedelegation,getAlldelegation,deleteintiative,logout
};