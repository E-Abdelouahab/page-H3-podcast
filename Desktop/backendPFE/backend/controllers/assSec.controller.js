const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const assSec = require('../models/assSec.model');
const event = require('../models/event.model');
const date = new Date();
const { inputValidationSchema  } = require("./XssValidation");

/*------------------------------------Add AssSec-----------------------------------*/

const addassSec = (req, res) => {

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
        const assName = req.body.assName;
        const email = req.body.email;
        const login = req.body.login;
        const password = hashPassword;
        const status = "InActive";
        const type = "Starter";
        const listedEvent = 0;

        // const docummant = {
        // data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        // contentType: 'image/png'};
   
        const assSecPush = new assSec({
            assName,
            email,
            login,
            password,
            status,
            type,
            listedEvent,
            
            
        });
        assSecPush
        
            .save()
            .then(() => res.json("assSec authentication successfully Please Wait untill Doctor ACCEPTER Your documments"))
            .catch((err) => res.status(400).json("Error :" + err));
    });
}
//-------------------------login assSec-----------------------------

const loginassSec = (req, res) => {

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

    assSec.findOne({
    login: login
    })
    .then(assSec => {

      if (assSec) {
        bcrypt.compare(password, assSec.password, function (err, result) {
          if (err) {
           return res.json({
              error: err
            })
          }

          if (result) {

      console.log(result.status);


            if(assSec.status == "InActive"){
               return res.json({
                  status: 'InActive'
                  })
            }
            else if(assSec.status == "Block"){
             return res.json({
                status: 'Block'
                })
          }
            
            
            
            else {
              let token = jwt.sign({
                login: login
              }, 'tokenkey', (err, token) => {
                res.cookie("token", token)
                res.json({
                  token: token,
                  id:assSec._id
                })
              
            })
          }


        }
        
            
        else {
          return  res.json({
              message: 'password incorrect try again !!'
            })
          }
        })
      } else {
       return res.json({
          message: 'Association Secondaire not found'
        })
      }
    }).catch((err) => res.status(400).json("Error :" + err));
}



//______________________Add event_____________________ 
const Addevent = (req,res) =>{
 const titel= req.body.titel;
 const description= req.body.description;
 const productImg= req.body.productImg;
 const category= req.body.category;
 const idAss= req.body.idAss;
 const currentDate= date;
 const status = req.body.status;

 const eventPush = new event({
       titel,
       description,
       productImg,
       category,
       idAss,
       currentDate,
       status
  });
//Save
eventPush
.save()
.then(() => res.status(201).json("event added successfully"))
.catch((err) => res.status(400).json("Error :" + err));

};
//______________________get all event 
const getAllevent = (req, res) => {
  event.find()
  .then(eventInfos => {
        res.status(200).json(eventInfos);
      }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: "Error!",
            error: error
        });
      });
};

//______________________Delete Event_____________________ 
const deleteevent = (req, res) => {
  const {id} = req.params;
  event.findOneAndDelete({_id: id})
      .then(event => {
          if(!event) {
            res.status(404).json({
              message: "Does Not exist a event with id = ",
              error: "404",
            });
          }
          res.status(200).json({});
      }).catch(err => {
          return res.status(500).send({
            message: "Error -> Can NOT delete a event with id = ",
            error: err.message
          });
      });
};

//________________________updating event___________________
const updateevent = (req, res) => {
  // Find event By ID and update it
  event.updateOne({
      _id: req.params.id
    }, {
      titel: req.body.titel,
      description: req.body.description,
      productImg: req.body.productImg,
      category: req.body.category,
      idAss: req.body.idAss,
      currentDate: date,
      status : req.body.status,
    })
    .then(() => res.status(201).json("event updated successfully"))
    .catch((err) => res.status(400).json("Error :" + err));
    
};

//________________________Get event By id____________________
const geteventtById = (req, res) => {
  event.findById(req.params.id)
      .then(event => {
        res.status(200).json(event);
      }).catch(err => {
          if(err.kind === 'ObjectId') {
              return res.status(404).send({
                  message: "event not found with id " + req.params.id,
                  error: err
              });                
          }
          return res.status(500).send({
              message: "Error retrieving Category with id " + req.params.id,
              error: err
          });
      });
};
 //-------------------------logout assSec and remove token-----------------------------   
 const logout = (req, res) => {
  const deconnect = res.clearCookie("token")

  res.json({
      message: 'AssSec is Signout !!'
  })
}

//________________________Get event By NameassSec____________________
const geteventByassSecname = (req, res) => {
  event.find({
idAss: req.params.idAss
    })
    .then(event => {
      res.send(event);
    }).catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving question."
      });
    });
};




module.exports={
    addassSec,loginassSec,Addevent,getAllevent,deleteevent,updateevent,geteventtById,logout,geteventByassSecname
};