const mongoose= require("mongoose")


const schema= mongoose.Schema({
    ref: {type: String, require: true},
    adresse_depart: {type: String, require: true},
    adresse_arrive: {type: String, require: true},
    heure_depart: {type: String, require: true},
    heure_arrive: {type: String, require: true},
    statut: {type: String, require: true},
    facture_id: {type: mongoose.Types.ObjectId, require: true, ref: "Facture"},
    commande_id: {type: mongoose.Types.ObjectId, require: true, ref: "Commande"},
    user_id: {type: mongoose.Types.ObjectId, require: true, ref: "User"},
})


module.exports= mongoose.model("Trajet", schema)
