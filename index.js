//import 
require('dotenv').config()
const express = require('express')
const { appendFile } = require('fs')
const mongoose = require('mongoose')
const router = require('./routes/router')
const cors = require('cors')

const App = express()
const port = process.env.PORT

// middleware
App.use(cors())
App.use(express.json())
App.use(express.urlencoded({extended: true}))
App.use(express.static("uploads"))

// connection to database
// mongoose.connect(process.env.DB_URI,{
//     useNewUrlParser:true,
//     useUnifiedTopology:true,
// }).then(()=>console.log("connected Succesfully to the database")).catch((err)=>console.log("Some Issue with the connection to the database ",err))

const connectedDB = async ()=>{
  try {
   await mongoose.connect(process.env.DB_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log("connected Succesfully to the database")
  } catch (error) {
    console.log("Some Issue with the connection to the database ",error)
  }
}

connectedDB();
//route prefix
App.use("/api/student", require('./routes/router'))

// App.get("/",(req,res)=>{
//     res.json({
//         name:"evariste le codeur"
//     })
// })

if(process.env.NODE_ENV ==='production'){
    App.use(express.static(__dirname+'/dist/'))
    App.get('*',(req,res)=>{
        res.sendFile(__dirname+'/dist/index.html')
    })
}

//start server
App.listen(port, ()=>console.log(`server running at http://localhost:${port}`))