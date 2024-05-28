
const mongoose= require("mongoose")


const schema= mongoose.Schema({
    duree: {type: String, require: true},
    ref: {type: String, require: true},
    //user_id here is for client
    user_id: {type: mongoose.Types.ObjectId, require: true, ref: "User"},
    trajet_id: {type: mongoose.Types.ObjectId, require: true, ref: "Trajet"},
    facture_id: {type: mongoose.Types.ObjectId, require: true, ref: "Facture"},
    statut: {type: String, require: true, default: "en cours"},
    commentaire: {type: String}
})


module.exports= mongoose.model("Commande", schema)
