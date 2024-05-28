




const Paiement= require("../entity/mongoDB/paiement");


exports.create =(req, res, next) => {
    let doc= JSON.parse(req.body.paiement);
    const paiement= new Paiement(doc);
    paiement.save().then((rs)=> {
        res.status(201).json({paiement: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let paiement= req.body; 
    Paiement.updateOne({_id: paiement?._id}, paiement)
    .then((_)=> {
        Paiement.findById(paiement?._id).populate("facture_id").then(
            (item)=>res.status(200).json({"paiement": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Paiement.findById(id).populate("facture_id")
    .then(
        (item)=> res.status(200).json({"paiement": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Paiement.find().populate("facture_id").then(
        (items)=> res.status(200).json({"paiements": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByFacture= (req, res, next)=>{
    fact_id= req.params.id
    Paiement.find({"facture_id": fact_id}).populate("facture_id").then(
        (items)=> res.status(200).json({"paiements": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Paiement.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}