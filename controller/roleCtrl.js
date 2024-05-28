


const Role= require("../entity/mongoDB/role");


exports.create =(req, res, next) => {
    let doc= req.body.role;
    const role= new Role(doc);
    role.save().then((rs)=> {
        res.status(201).json({role: rs});
    })
    .catch((error)=> res.status(400).json({error: error}))
}

exports.misAjour = (req, res, next)=>{
    let role= req.body; 
    Role.updateOne({_id: role?._id}, role)
    .then((_)=> {
        Role.findById(role?._id).then(
            (item)=>res.status(200).json({"role": item})
        ).catch((error)=> res.status(400).json({"error": error}))
    })
    .catch((error)=> res.status(400).json({"error": error}))
}

exports.getOne= (req, res, next)=>{
    const id= req.params.id
    Role.findById(id)
    .then(
        (item)=> res.status(200).json({"role": item})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.getAll= (req, res, next)=>{
    Role.find().then(
        (items)=> res.status(200).json({"roles": items})
    ).catch((error)=>res.status(400).json({"error":error}))
}

exports.remove = (req, res, next)=>{
    const id= req.params.id
    Role.deleteOne({_id: id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({"error": error}))
}