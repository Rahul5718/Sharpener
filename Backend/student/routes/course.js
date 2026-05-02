const express = require('express')

const router = express.Router()

const courses = [

{ id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },

{ id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }

];

router.get('/',(req,res)=>{
    
     res.send(`Courses : ${courses.map(courses=>courses.name).join(',')}`)
})

router.get('/:id',(req,res)=>{

     if(!courses.find(courses=>courses.id===parseInt(req.params.id))){
          res.send('Course not found.')
     }
     else{
          res.send(`Course:${courses.find(courses=>courses.id===parseInt(req.params.id)).name} - ${courses.find(courses=>courses.id===parseInt(req.params.id)).description}`)
     }
})

router.post('/',(req,res)=>{

     courses.push({
          id:courses.length+1,
          name:req.body.name,
          description:req.body.description
     })
     res.status(201).send(newCourse);
     // res.send('New course is added.')
})

module.exports=router