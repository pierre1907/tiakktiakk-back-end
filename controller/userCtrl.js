require('dotenv').config()
const jwt=require("jsonwebtoken");
const bcrypt= require("bcryptjs");
const User= require("../entity/mongoDB/user");
const service= require("../service/service")

exports.login = async (req, res, next)=>{
    const mail= req.body.mail;
    const password= req.body.password;

    User.findOne({email: mail, archive: false}).populate("role").populate("vehicule_id").then(
        async (rs) => {
            const isValid= await bcrypt.compare(password, rs?.password)
            if(!isValid){
                return service.messError(res, "invalid credential");
            }
            const token= jwt.sign({userId: rs._id}, "tiakktiakk", {expiresIn: "30y"})
            res.status(200).json({user: rs, token: token})
        }
    ).catch((error)=> service.messError(res, "invalid credential"))
}


exports.signin= async (req, res, next)=>{
    try {
        let doc= JSON.parse(req.body.user);
        bcrypt.hash(doc.password, 10).then(
            (hash) => { 
                doc={...doc, password: hash}
                const user= new User(doc)
                user.save().then((rs)=> {
                    res.status(201).json({user: rs});
                })
                .catch((error)=> res.status(400).json({error: error}))
            }
        ).catch((error)=> res.status(400).json({error: error}))  
    } catch (error) {
        res.status(400).json({error: error})
    }

}


exports.remove = (req, res, next)=>{
    const id= req.params.id
    User.deleteOne({_id:id})
    .then(()=>res.status(200).json({message: "suppression réussie!"}))
    .catch((error)=> res.status(400).json({error: error}))
}


exports.misAjour = (req, res, next)=>{
    let user= req.body; 
    User.updateOne({_id: user?._id}, user)
    .then((_)=> {
        User.findById(user?._id).populate("role").populate("vehicule_id").then(
            (use)=>res.status(200).json({user: use})
        ).catch((error)=> res.status(400).json({error: error}))
    })
    .catch((error)=> res.status(400).json({error: error}))
}


exports.getOne= (req, res, next)=>{
    const id= req.params.id
    User.findById(id).populate("role").populate("vehicule_id")
    .then(
        (user)=> res.status(200).json({user: user})
    ).catch((error)=>res.status(400).json({error:error}))
}

exports.getAll= (req, res, next)=>{
    User.find().populate("role").populate("vehicule_id").then(
        (users)=> res.status(200).json({users: users})
    ).catch((error)=>res.status(400).json({error:error}))
}

exports.passwordCheck= (req, res, next )=>{
    const password= req.params.password 
    const id= req.params.id;
    User.findById(id).populate("role").populate("vehicule_id").then((user)=>{
        bcrypt.compare(password, user.password).then(
            (valid)=> {
                if(!valid){
                    return res.status(400).json({"error": "données incorrectes"})
                }
                return res.status(200).json({"message": "bon mot de passe"})
            }
        ).catch((_)=> res.status(400).json({"error":"erreur de données"}))
        
    }).catch((_)=> res.status(400).json({"error": "utilisateur introuvable"}))
}

exports.resetPassword= (req, res, next)=>{
    const id= req.params.id;
    const password= req.body.password;
    const oldPassword= req.body.oldPassword; 
    User.findById(id).populate("role").populate("vehicule_id").then((user)=>{
        bcrypt.compare(oldPassword, user.password).then(
            (valid)=> {
                if(!valid){
                    return res.status(400).json({"error": "données incorrectes"})
                }
                
                bcrypt.hash(password, 10).then(
                    (hash)=>{
                        user.password=hash
                        User.updateOne({_id:id}, user).then(
                            ()=>{
                                res.status(200).json({
                                    "message": "mot de passe mis à jour"
                                })
                            }
                        ).catch((_)=> res.status(400).json({"error":"probleme de mise à jour"}))
                    }
                ).catch((_)=> res.status(400).json({"error":"mot de passe court"}))
            }
        ).catch((_)=> res.status(400).json({"error":"erreur de données"}))
        
    }).catch((_)=> res.status(400).json({"error": "utilisateur introuvable"}))
}

