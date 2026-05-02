const express = require('express')

const app = express()

const userRoutes = require('./routes/user')
const productRoutes = require('./routes/product')
const cartRoutes = require('./routes/cart')  

app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)  

let port = 3000
app.listen(port, () => {
     console.log(`Server is running on port ${port}`)
})