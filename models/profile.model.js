let mongoose = require("mongoose");

let profileSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type :Number,
        required : true
    }
})

 module.exports = profileModel = mongoose.model("profile",profileSchema);