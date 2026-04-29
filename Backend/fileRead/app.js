const http = require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
     const url=req.url
     const method=req.method
     if(req.url === '/'){
//form

          res.setHeader('Content-Type','text/html');

          res.end(

               `
               <form action="/message" method="POST">
               <label> Name :
               <input type="text" name="username"></input>
               <button type="submit">Add</button>
               </form>
               `
          )
     }else{
          if(req.url=='/message'){
               res.setHeader('Content-Type','text/html');
               let dataChunks=[]
               req.on('data',(chunk)=>{
                    console.log(chunk)
                    dataChunks.push(chunk)
                    
               })

               req.on('end',()=>{
                   let bufferData=Buffer.concat(dataChunks)
                   console.log(bufferData);

                       let formData=bufferData.toString()
                           console.log(formData)
                               let username=formData.split('=')[1]
                   fs.writeFile('formData.txt',formData,(err)=>{
                    res.statusCode=302 //redirected
                    res.setHeader('Location','/')
                   res.end(
                    `
                    <h1>Data received and saved to file</h1>
                    <p>Username: ${username}</p>
                    <a href="/read">Read Data</a>
                    `
                   )
                   })
               })
          }

          else{
               if(req.url==='/read'){

                    fs.readFile('formData.txt',(err,data)=>{
                         // if(err){
                         //      res.statusCode=500
                         //      res.end('Error reading file')
                         // }else{
                         //      res.setHeader('Content-Type','text/plain');
                         //      res.end(data)
                         // }
                         console.log(data.toString());
                         res.end(
                              `
                              <h1>Data from file:</h1>
                              <p>${data.toString()}</p>
                              `
                         )
                         
                    })
          }
     }

     }  
})
server.listen(3000, ()=>{
console.log("Server is running")
})