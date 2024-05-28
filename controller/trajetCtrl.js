

const Trajet= require("../entity/mongoDB/trajet");



exports.create =(req, res, next) => {
    let doc= JSON.parse(req.body.trajet);
    const trajet= new Trajet(doc);
    trajet.save().then((rs)=> {
        res.status(201).json({trajet: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let trajet= req.body; 
    Trajet.updateOne({_id: trajet?._id}, trajet)
    .then((_)=> {
        Trajet.findById(trajet?._id).populate("facture_id").populate("commande_id").populate("user_id").then(
            (item)=>res.status(200).json({"trajet": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Trajet.findById(id).populate("facture_id").populate("commande_id").populate("user_id")
    .then(
        (item)=> res.status(200).json({"trajet": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Trajet.find().populate("facture_id").populate("commande_id").populate("user_id").then(
        (items)=> res.status(200).json({"trajets": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Trajet.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getByFacture= (req, res, next)=>{
    let fact_id= req.params.id
    Trajet.find({"facture_id": fact_id}).populate("facture_id").populate("commande_id").populate("user_id").then(
        (items)=> res.status(200).json({"trajets": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByCommande= (req, res, next)=>{
    let com_id= req.params.id
    Trajet.find({"commande_id": com_id}).populate("facture_id").populate("commande_id").populate("user_id").then(
        (items)=> res.status(200).json({"trajets": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getByUser= (req, res, next)=>{
    let us_id= req.params.id
    Trajet.find({"user_id": us_id}).populate("facture_id").populate("commande_id").populate("user_id").then(
        (items)=> res.status(200).json({"trajets": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}



