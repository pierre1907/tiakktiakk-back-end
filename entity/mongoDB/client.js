const mongoose= require("mongoose");
const extendSchema = require('mongoose-extend-schema');
const userSchema= require("./user");

const schema= extendSchema(userSchema, {
    reference: {type: String, require: true},
    permis: {type: String, require: true},
    langue: {type: String, require: true}
})


module.exports= mongoose.model("Client", schema);


