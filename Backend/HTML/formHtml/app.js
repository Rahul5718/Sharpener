const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static('public'))

const productRoute = require('./route/productRoute')

app.use('/product',productRoute)

let port = 4000

app.listen(port,()=>{
     console.log(`server is running at localhost:${port}`)
     
})

