 const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const intiative = new Schema(
  {
    idEvent: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event'
    },
    intiativeAddress:{

        type: String,
        required: true,
    },
    price:{

        type: String,
        required: true,
    },
    termine: {
      type: Boolean,
      default: false,
      
    },
    
 

    versionKey: false
}
);

const intiativeList = mongoose.model("intiative", intiative);
module.exports = intiativeList;