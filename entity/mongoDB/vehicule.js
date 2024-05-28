const mongoose= require("mongoose")


const schema= mongoose.Schema({
    marque: {type: String, require: true},
    immatriculation: {type: String, require: true},
    couleur: {type: String, require: true},
    // user id is for driver
    user_id: {type: mongoose.Types.ObjectId, require: true, ref: "User"},
})


module.exports= mongoose.model("Vehicule", schema)
