const mongoose= require("mongoose");
const extendSchema = require('mongoose-extend-schema');
const userSchema= require("./user");

const schema= extendSchema(userSchema, {
    reference: {type: String, require: true},
    permis: {type: String, require: true},
    vehicule_id: {type: mongoose.Types.ObjectId, require: true, ref: "Vehicule"}
})


module.exports= mongoose.model("Chauffeur", schema);

