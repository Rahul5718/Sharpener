const http = require('http')

const server = http.createServer((req,res)=>{

     if(req.url==='/'){
          res.end(`
               <h1>hello world</h1>
               <h1> home page</h1>
               <h1> this is page 1</h1>
          `)
     }
})

server.listen(3000,()=>{
     console.log("server runnig");
     
})