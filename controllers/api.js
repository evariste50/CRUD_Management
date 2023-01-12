const Etudiant = require('../models/student')
const fs = require("fs")


module.exports = class API{

    // retreive all data
    static async fetchAllStudents(req,res){
        try {
            const students =  await Etudiant.find()
            res.status(200).json(students)
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        }
        
    }

    //retrieve data by Id
    static async fetchStudentsById(req,res){
        const Id = req.params.id
        try {
            const student = await Etudiant.findById(Id)
            res.status(200).json(student)
        } catch (error) {
            res.status(404).json({
                message: error.message
            })
        } 
    }

    //create a new Data
    static async CreateNewStudent(req,res){
        
        const body = req.body
    //    const imagename = req.file.filename;
    //    body.image = imagename
        try {
            await Etudiant.create(body)
            res.status(201).json({message: "Post created Succesfully"})
        } catch (error) {
            res.status(400).json({message : error.message})
        }
    }

    //update a student

    static async UpdateStudent(req,res){
        const id = req.params.id
        let new_image = ""
        if(req.file){
            new_image = req.file.filename
            try {
                fs.unlinkSync("./uploads/"+req.body.old_image)
            } catch (err) {
                console.log(err);
            }
        }else{
            new_image = req.body.old_image
        }

        const newStudent = req.body
        newStudent.image = new_image

        try {
            await Etudiant.findByIdAndUpdate(id,newStudent)
            res.status(200).json({message:'Update Succesfully'})
            console.log('Update Succesfully');
        } catch (error) {
            res.status(404).json({message : error.message})
        }
    }

    //delete a student

    static async deleteStudent(req,res){
        const id = req.params.id
        try {
            const result = await Etudiant.findByIdAndDelete(id)
            if (result.image != '') {
                try {
                    fs.unlinkSync("./uploads/"+result.image)
                } catch (err) {
                    console.log(err);
                }
            }
            res.status(200).json({message:"Post Delete Succesfully"})
        } catch (error) {
            res.status(404).json({message:err.message})
        }
        

    }

}