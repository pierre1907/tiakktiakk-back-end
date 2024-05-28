




const Facture= require("../entity/mongoDB/facture");


exports.create =(req, res, next) => {
    let doc= JSON.parse(req.body.facture);
    const facture= new Facture(doc);
    facture.save().then((rs)=> {
        res.status(201).json({facture: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let facture= req.body; 
    Facture.updateOne({_id: facture?._id}, facture)
    .then((_)=> {
        Facture.findById(facture?._id).populate("commande_id").populate("trajet_id").populate("paiement_id").then(
            (item)=>res.status(200).json({"facture": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Facture.findById(id).populate("commande_id").populate("trajet_id").populate("paiement_id")
    .then(
        (item)=> res.status(200).json({"facture": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Facture.find().populate("commande_id").populate("trajet_id").populate("paiement_id").then(
        (items)=> res.status(200).json({"factures": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Facture.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getByCommande= (req, res, next)=>{
    id= req.params.id
    Facture.find({"commande_id": id}).populate("commande_id").populate("trajet_id").populate("paiement_id").then(
        (items)=> res.status(200).json({"factures": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByTrajet= (req, res, next)=>{
    id= req.params.id
    Facture.find({"trajet_id": id}).populate("commande_id").populate("trajet_id").populate("paiement_id").then(
        (items)=> res.status(200).json({"factures": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByPaiement= (req, res, next)=>{
    id= req.params.id
    Facture.find({"paiement_id": id}).populate("commande_id").populate("trajet_id").populate("paiement_id").then(
        (items)=> res.status(200).json({"factures": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}
