const express = require('express')

const router= express.Router()

const students=[
    { id:1,
     name:'Alice',},
    { id: 2, 
     name: "Bob"},
     {id: 3,
     name: "Charlie"} 
]
router.get('/',(req,res)=>{
    
     res.send(`Students : ${students.map(student=>student.name).join(',')}`)


})

router.get('/:id',(req,res)=>{
     // res.send(`Fetch a student by ID ${req.params.id}`)
     

     if(!students.find(student=>student.id===parseInt(req.params.id))){
          res.send('Student not found.')
     }
     else{
          res.send(`Student : ${students.find(student=>student.id===parseInt(req.params.id)).name} `)
     }
})


router.post('/',(req,res)=>{

     students.push({id:students.length+1,name:req.body.name})

     res.send('A new student is added.')


})

module.exports=router