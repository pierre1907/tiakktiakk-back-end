
const mongoose= require("mongoose");
require("dotenv").config()

const uri= process.env.MONGO_DB_URL

//const uri= "mongodb+srv://yameogoivan10:Seigneur123@cluster0.rxzql7d.mongodb.net/?retryWrites=true&w=majority";

exports.uri= uri;

exports.conn= mongoose.createConnection(uri);  