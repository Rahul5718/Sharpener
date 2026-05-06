const express = require('express')

const app = express()

const studentRoute = require('./route/studentRoute')

app.use(express.json())

app.get('/',(req,res)=>{
     res.send('<h1>chalo agge</h1>')
})

app.use('/',studentRoute)

let port = 3000

app.listen(port,()=>{
     console.log('server is running');
     
})