let mongoose = require("mongoose");

let gamesSchema = mongoose.Schema({
    id : {
        type : mongoose.SchemaTypes.ObjectId,
        required : true
    },
    hobby : {
        type :String,
        required : true
    }
})

 module.exports = gamesModel = mongoose.model("game",gamesSchema);