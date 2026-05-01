const express = require('express')

const app = express()

const bookRouter = require('./routes/books')

app.use('/books',bookRouter)

let port=3000

app.listen(port,()=>{
     console.log(`server is running at http://localhost:${port}`);
     
})