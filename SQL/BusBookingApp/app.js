const express = require('express')

const busRouter = require('./routes/busRoute')

const db=require('./util/dbConnection')

const  {User,Payment,Booking,Buses} = require('./model/bus')


const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
     res.send('<h1>Bus Booking App</h1>')
})

app.use('/',busRouter)

db.sync({force:true}).then(()=>{
app.listen(3000,()=>{
     console.log('server is running');
     
})
}).catch((error)=>{
     console.log(error);
     
})