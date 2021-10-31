const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt_decode = require('jwt-decode');

const vol = require('../models/vol.model');

const { inputValidationSchema  } = require("./XssValidation");

//------------------------Volontaire authentication---------------------
const addvol = async (req, res) => {

  let error = [];

        
  const { err } = inputValidationSchema.validate(req.body)
  if (err) {

          

          error.push(err.details[0].message);
          return res.json({

                  error : error
          }) 

  };

    bcrypt.hash(req.body.password, 10, function (err, hashPassword) {
        if (err) {
            res.json({
                error: err
            })
        }
        const firstName = req.body.firstName;
        const lastName = req.body.lastName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const role = "volontaire";
        const status = "InValide";
        const verified = false;      
        const volPush = new vol({
            firstName,
            lastName,
            email,
            login,
            role,
            status,
            password,
            verified
        });
        volPush
        
            .save()
            .then(() => res.json("Volontaire ADDED!!!!!"))
            .catch((err) => res.status(400).json("Error :" + err));
    });
// ----------------------send email validation -------------------------------   
    const token = jwt.sign({login: req.body.login, email : req.body.email}, 'tokenkey');

    const transport = nodemailer.createTransport({
      service: "gmail",
          auth: {
            user: 'abdelouahabelhassnaoui36@gmail.com',//email
            pass: 'Rachida2020'//password
          }
      })
    
      await transport.sendMail({
          from: 'abdelouahabelhassnaoui36@gmail.com',
          to: req.body.email,
          subject: "Email Activated Account",
          html: `
          <h2>Please click on below link to activate your account</h2>
          <p>http://localhost:3030/vol/activateComptevol/${token}</p>
      `
      })
  
    
}
//------------------------volontaire authentication---------------------
const activateComptevol =  async(req, res) => {
    const token = req.params.token;
  
    jwt.verify(token, 'tokenkey');
  
    let decoded = await jwt_decode(token);
    let login = decoded.login;
  
     await vol.findOneAndUpdate({ login: login },{verified : true});
  
     res.json({
             message : "ok"
     });
  }
  
//-------------------------login volontaire-----------------------------
const loginvol = (req, res) => {
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
  
    vol.findOne({
        login: login
      })
      .then(vol => {
  
        if (vol) {
          bcrypt.compare(password, vol.password, function (err, result) {
            if (err) {
              return res.json({
                error: err
              })
            }
            if (result) {

              if(vol.verified == false){
               return  res.json({
                  verified: 'InActive'
                  })
            }if(vol.role != "Volontaire"){
             return res.json({
                role: vol.role
                })
          }else{

            let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token),
                res.cookie("role", role)
                res.json({
                  token: token,
                  role: vol.role
                })
              })
            }



            } 
            
          })
        } else {
         return res.json({
            message: 'Volontaire not found'
          })
        }
      }).catch((err) => res.status(400).json("Error :" + err));
  }
 //-------------------------logout volontaire and remove token-----------------------------   
 const logout = (req, res) => {
    const deconnect = res.clearCookie("token")
  
    res.json({
        message: 'Volontaire is Signout !!'
    })
  }

module.exports={
    addvol,activateComptevol,loginvol,logout
  };