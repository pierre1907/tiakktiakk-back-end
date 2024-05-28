const jwt= require("jsonwebtoken")

module.exports = (req, res, next)=>{
    try{
        const token= req.headers.authorization.split(" ")[1];
        const decodedToken= jwt.verify(token, "tiakktiakk");
        const userId= decodedToken.userId;
        const id= req.body.userId;
        if(id && id!==userId){
            throw "problem Id";
        }else{
            next();
        }
    }catch{
        res.status(401).json({
            error: new Error("check token")
        });
    } 
}