const mongoose= require("mongoose")


const schema= mongoose.Schema({
    ref: {type: String, require: true},
    mode_paiement: {type: String, require: true},
    commande_id: {type: mongoose.Types.ObjectId, ref: "Commande"},
    trajet_id: {type: mongoose.Types.ObjectId, ref: "Trajet"},
    paiement_id: {type: mongoose.Types.ObjectId, ref: "Paiement"},
})


module.exports= mongoose.model("Facture", schema)