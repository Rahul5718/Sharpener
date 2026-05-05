const e = require('express')
const { connect } = require('../route/studenRoute')
const connection = require('../util/dbconnection')
const db = require('../util/dbconnection')

const addEntry = (req,res)=>{ 
     const {email,name} = req.body

     const insertQuery = `INSERT INTO students (email,name) values(?,?)`
    
     db.execute(insertQuery,[email,name],(err)=>{
          if(err){
               console.log(err)
               res.status(500).send(err.message)
               connection.end()
               return
               
          }

          console.log("value is inserted")
          res.status(200).send(`Student with name ${name} successfully added`)
          
     })
}

const updateEntry = (req,res)=>{
     const {id} = req.params

     const {name} = req.body
     const updateQuery = "UPDATE students  set name=? where id=?"

     db.execute(updateQuery,[name,id],(err,result)=>{
          if(err){
               console.log(err.message);
               res.status(500).send(err.message)
               db.end()
               return
          }
          if(result.affectedRows===0){
               res.status(404).send("student not found")
               return
          }

          res.status(200).send("user has been updated")
     })
}

const deleteEntry= (req,res)=>{
     const {id}=req.params

     const deleteQuery =`Delete from students where id=?`

     db.execute(deleteQuery,[id],(err,result)=>{
          if(err){
               console.log(err.message);
               res.status(500).send(err.message)
               
          }
          if(result.affectedRows===0){
               res.status(404).send("student not found")
               return
          }

          res.status(200).send(`user with ${id} is deleted`)
     })
}

module.exports={
     addEntry,
     updateEntry,
     deleteEntry
}