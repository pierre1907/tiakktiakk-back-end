

const Vehicule= require("../entity/mongoDB/vehicule");


exports.create =(req, res, next) => {
    let doc= JSON.parse(req.body.vehicule);
    const vehicule= new Vehicule(doc);
    vehicule.save().then((rs)=> {
        res.status(201).json({vehicule: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let vehicule= req.body; 
    Vehicule.updateOne({_id: vehicule?._id}, vehicule)
    .then((_)=> {
        Vehicule.findById(vehicule?._id).populate("user_id").then(
            (item)=>res.status(200).json({"vehicule": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Vehicule.findById(id).populate("user_id")
    .then(
        (item)=> res.status(200).json({"vehicule": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Vehicule.find().populate("user_id").then(
        (items)=> res.status(200).json({"vehicules": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Vehicule.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}


