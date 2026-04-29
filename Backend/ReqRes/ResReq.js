const http=require('http')

const server=http.createServer((req , res)=>{
   console.log("server is creaded")

res.setHeader('Content-Type','text/html')

if(req.url==='/'){

     res.statusCode=200

    res.write("<h1> Hello World </h1>")
}
else if(req.url==='/home'){

     res.statusCode=200

     res.write("<h1> Welcome Home </h1>")
}
else if(req.url==='/about'){

     res.statusCode=200

     res.write("<h1> Welcome to About Us </h1>")

}else if(req.url==='/node'){
     res.statusCode=200

     res.write("<h1> Welcome to my Node js project </h1>")
}
else{
     res.statusCode=404
     res.write("<h1> Page Not Found </h1>")
}

res.end()

})

let port=3005
server.listen(port,()=>{
     console.log(`server is running on port ${port}`)
})

