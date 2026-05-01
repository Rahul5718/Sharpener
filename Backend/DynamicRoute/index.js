const express = require('express')

const app = express()

app.get('/welcome/:username',(req,res)=>{

     const usename = req.params.username

     const role = req.query.role

     res.send(`<h1> Welcome ${usename} , your role is ${role}</h1>`)
})
 let port = 3000

app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`);
     
})