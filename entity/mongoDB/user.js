const mongoose= require("mongoose");



const schema= mongoose.Schema({
    nom: {type: String, require: true}, 
    prenom: {type: String, require: true}, 
    email: {type: String, require: true}, 
    password: {type: String, require: true}, 
    adresse: {type: String, require: false}, 
    genre: {type: String, require: false}, 
    photo: {type: String, require: false}, 
    telephone: {type: String, require: false}, 
    naissance: {type: String, require: false}, 
    role: {type: mongoose.Types.ObjectId, require: true, ref: "Role"},
    archive: {type: String, default: false},
    reference: {type: String, require: false},
    permis: {type: String, require: false},
    langue: {type: String, require: false},
    permis: {type: String, require: false},
    vehicule_id: {type: mongoose.Types.ObjectId, require: false, ref: "Vehicule"}
})


//module.exports= schema //mongoose.model("User", schema)


module.exports= mongoose.model("User", schema)

