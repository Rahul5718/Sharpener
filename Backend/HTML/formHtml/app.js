const express = require('express')

const app = express()

const productRoute = require('./route/productRoute')

app.use('/product',productRoute)

let port = 3000

app.listen(port,()=>{
     console.log(`server is running at localhost:${port}`)
     
})

