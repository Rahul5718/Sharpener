const express = require('express')

const http = require('http')


const app = express()
const server = http.createServer((req,res)=>{
     if(req.url==='/'){
          res.end(`
               <h1>hello world</h1>
               
          `)
     }
})

server.listen(3000,()=>{
     console.log("Server is up and running on port 3000! Ready to handle requests.")
     
})
