const express = require('express')

const app = express()

const userRoutes = require('./route/user')
const productRoutes = require('./route/product')
const cartRoutes = require('./route/cart')

app.use(express.json())

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)

let port =3000

app.listen(port,()=>{
     console.log(`Server is running on port ${port}`)
})