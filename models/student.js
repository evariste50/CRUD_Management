const mongoose = require('mongoose')

const EtudiantSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sexe :{
        type:String,
        required:true
    },
    orphan :{
        type:Boolean,
        required:true
    },
    filiere :{
        type:String,
        required:true
    },
    niveau :{
        type:Number,
        required:true
    },
    matricule :{
        type:String,
        required:true
    },
    image:String,

})

module.exports = mongoose.model("Etudiant",EtudiantSchema)