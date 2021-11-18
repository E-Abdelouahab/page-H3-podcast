const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assSec = new Schema(
    {
        assName: {
            type: String,
            required: true,
            trim: true,
        },
    
        email: {
            type: String,
            required: true,
            trim: true,
        },
        login: {
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },

        status : {
            type : String,
            required : true,
            trim : true,
        },
        type : {
            type : String,
            required : true,
            trim : true,
        },
        
          listedEvent: {
            type: Number,
            default: 0,
          }
      
    }
);
const assSecList = mongoose.model("assSec",assSec);
module.exports = assSecList;
