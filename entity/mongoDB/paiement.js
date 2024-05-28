const mongoose= require("mongoose")


const schema= mongoose.Schema({
    ref: {type: String, require: true},
    mode_paiement: {type: String, require: true},
    montant: {type: String, require: true},
    date: {type: String, require: true},
    statut: {type: String, require: true},
    facture_id: {type: mongoose.Types.ObjectId, ref: "Facture"}
})


module.exports= mongoose.model("Paiement", schema)

