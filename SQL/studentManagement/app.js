const express = require('express')

const app = express()

const studentRoute = require('./route/studentRoute')

const db=require('./util/dbConnection')

//models
const studentModel=require('./model/student')


app.use(express.json())

app.get('/',(req,res)=>{
     res.send('<h1>chalo agge</h1>')
})

app.use('/',studentRoute)

db.sync({force:true}).then(()=>{
     app.listen(3000,()=>{
     console.log('server is running');
     
})
}).catch((error)=>{
     console.log(error);
     
})


