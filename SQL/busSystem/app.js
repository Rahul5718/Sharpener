const express = require('express')

const app = express()


const db=require('./util/dbConnection')

app.use(express.json())

const busRoute=require('./route/busRoute')

app.get('/',(req,res)=>{
     res.send("kay karu")
})

app.use('/buses',busRoute)
app.use('/user',busRoute)

app.listen(3000,()=>{
     console.log('server runing');
     
})