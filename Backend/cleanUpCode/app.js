const http=require("http")

const route=require("./route")

route.testFunction()

const server=http.createServer(route.handler)

server.listen(3000,()=>{
     console.log("server is runnig");
     
})