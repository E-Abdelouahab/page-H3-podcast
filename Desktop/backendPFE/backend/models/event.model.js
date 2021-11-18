const mongoose = require("mongoose");
const date = new Date().getTime();
const Schema = mongoose.Schema;

const event = new Schema(
    {   
        titel : {
            type : String,
            required : true,
            trim : true,
        },
        description : {
            type : String,
            required : true,
            trim : true,
        },
        productImg : {
            type : String,
            required : true,
            trim : true,
        },
      
        category : {
            type : String,
            required : true,
            trim : true,
        },
       
        idAss : {
            type : String,
            required : true,
            trim : true,
        },
        currentDate : {
            type : Date,
            required : true,
            trim : true,
        },
        status : {
            type : String,
            required : true,
            trim : true,
        },
        id_Ass: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Ass'
        },
        
    }
);

const eventList = mongoose.model("event",event);
module.exports = eventList;
