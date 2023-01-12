const express = require('express')

const router = express.Router()
const API = require('../controllers/api')
const multer = require('multer')

// multer middleware

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./uploads")
    },
    filename :(req,file,cb)=>{
        cb(null,file.filename + "_" + Date.now()+"_" + file.originalname)
    }
})

const upload = multer({
    storage:storage
}).single("image")

//different route

router.get("/",API.fetchAllStudents)
router.get("/:id",API.fetchStudentsById)
router.post("/",upload,API.CreateNewStudent)
router.patch("/:id",upload,API.UpdateStudent)
router.delete("/:id",API.deleteStudent)

module.exports = router