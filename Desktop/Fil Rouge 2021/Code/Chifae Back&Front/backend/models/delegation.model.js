const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const delegation = new Schema({
    delegName: {
            type: String,
            required: true,
            trim: true,
        },
        telephone: {
            type: Number,
            required: true,
            trim: true,
        },
        ville: {
            type: String,
            required: true,
            trim: true,
        }
    }

);

const delegationList = mongoose.model("delegation ", delegation );
module.exports = delegationList;