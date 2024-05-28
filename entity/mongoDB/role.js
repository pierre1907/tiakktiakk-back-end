const mongoose= require("mongoose")


const schema= mongoose.Schema({
    libelle: {type: String, require: true}
})


module.exports= mongoose.model("Role", schema)