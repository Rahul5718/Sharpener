const express = require('express');
const app = express();

app.get('/order',(req,res)=>{
     res.send("Here is the list of all orders")
})

app.post('/order',(req,res)=>{
     res.send("A new order has been created.")
})

app.get('/users',(req,res)=>{
     res.send("Here is the list of all users.")
})

app.post('/users',(req,res)=>{
     res.send("A new user has been added.")
})

let port = 3000;
app.listen(port,()=>{
     console.log(`server is runnig on http://localhost:${port}`)
});
