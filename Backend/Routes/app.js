const express = require('express')

const app = express()

const orderRouter = require('./routers/order')

const userRouter = require('./routers/user')



app.use("/orders",orderRouter)
app.use("/users",userRouter)

app.listen(3000,()=>{
     console.log("server is running");
     
})