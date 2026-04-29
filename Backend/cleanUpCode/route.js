

// const http = require('http');
const fs = require('fs');
const requestHandler=((req,res)=>{
     const url=req.url
     const method=req.method

     if(url === '/'){
     //form

          res.setHeader('Content-Type','text/html');

          return res.end(`
               <form action="/message" method="POST">
               <label> Name :
               <input type="text" name="username"></input>
               <button type="submit">Add</button>
               </form>
               `
          )
     }else{
          if(url=='/message' && method==='POST'){
               // res.setHeader('Content-Type','text/html');
               let dataChunks=[]
               req.on('data',(chunk)=>{
                    // console.log(chunk)
                    dataChunks.push(chunk)
                    
               })

               req.on('end',()=>{
                   let bufferData=Buffer.concat(dataChunks)
               //  console.log(bufferData);

                    let formData=bufferData.toString()
                    // console.log(formData)
                    let username=formData.split('=')[1]
                   fs.writeFile('formData.txt',username,(err)=>{
                    res.statusCode=302 //redirected
                    res.setHeader('Location','/')
                   res.end()
                   })
               })
          }

          if(req.url==='/read'){

               return fs.readFile('formData.txt',(err,data)=>{
                    if(err){
                         res.statusCode=500
                         return res.end("Error reading file")
                    }     
                    res.setHeader('Content-Type','text/html')
                    return res.end(`<h1>${data.toString()}</h1>`)
               })
          }
   }  
})

const anotherFunction=()=>{
     console.log("another function");
}

module.exports.handler=requestHandler
module.exports.testFunction=anotherFunction