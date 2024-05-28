




const Commande= require("../entity/mongoDB/commande");


exports.create =(req, res, next) => {
    let doc= JSON.parse(req.body.commande);
    const commande= new Commande(doc);
    commande.save().then((rs)=> {
        res.status(201).json({commande: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let commande= req.body; 
    Commande.updateOne({_id: commande?._id}, commande)
    .then((_)=> {
        Commande.findById(commande?._id).populate("user_id").populate("trajet_id").populate("facture_id").then(
            (item)=>res.status(200).json({"commande": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Commande.findById(id).populate("user_id").populate("trajet_id").populate("facture_id")
    .then(
        (item)=> res.status(200).json({"commande": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Commande.find().populate("user_id").populate("trajet_id").populate("facture_id").then(
        (items)=> res.status(200).json({"commandes": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Commande.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getByUser= (req, res, next)=>{
    id= req.params.id
    Commande.find({"user_id": id}).populate("user_id").populate("trajet_id").populate("facture_id").then(
        (items)=> res.status(200).json({"commandes": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByTrajet= (req, res, next)=>{
    id= req.params.id
    Commande.find({"trajet_id": id}).populate("user_id").populate("trajet_id").populate("facture_id").then(
        (items)=> res.status(200).json({"commandes": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByFacture= (req, res, next)=>{
    id= req.params.id
    Commande.find({"facture_id": id}).populate("user_id").populate("trajet_id").populate("facture_id").then(
        (items)=> res.status(200).json({"commandes": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}
