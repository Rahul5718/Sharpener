const express = require('express')

const app = express()

const db=require('./util/dbconnection')

const studentRoute= require('./route/studenRoute')

app.use(express.json())

app.get('/',(req,res)=>{
     res.send("hello worlsd")
})

app.use('/student',studentRoute)

app.listen(4000,()=>{
     console.log("server runnig")
     
})