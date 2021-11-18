const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const superAdmin = new Schema(
{
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
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
},
 {
    versionKey: false
});

const superAdminList = mongoose.model("superAdmin",superAdmin);
module.exports=superAdminList;