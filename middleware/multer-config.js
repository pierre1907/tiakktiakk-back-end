const mongoose= require("mongoose");
const { connection } = require('mongoose');
const multer= require("multer");
const {GridFsStorage}= require("multer-gridfs-storage");
const crypto= require("crypto");
const path= require("path");
require("dotenv").config()

const url = process.env.MONGO_DB_URL

mongoose.set('strictQuery', false);
//const uri= uri
 
const storage= new GridFsStorage({
    url,
    db: connection.db, 
    file: (req, file)=>{ 
        
        return new Promise((resolve, reject)=>{
            crypto.randomBytes(16, (err, buff)=>{
                if(err){
                    return reject(err);
                } 
                const filename= buff.toString("hex") + path.extname(file.originalname)
                const fileInfo = {
                    filename: filename, //buckets: "fs" 
                    bucketName: 'fs'
                }
                resolve(fileInfo);
            })
        })
    }
})


//const mu= multer({storage: storage, limits:{fieldSize: 25 * 1024 * 1024}})
const mu= multer({storage: storage, limits:{fieldSize: 25 * 1024 * 1024}})

module.exports = mu.single("file")