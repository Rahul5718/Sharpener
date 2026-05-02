const express = require('express')

const app = express()

const productRoutes = require('./route/productRout')

app.use('/products',productRoutes)

const port =3000

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})