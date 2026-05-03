const path = require('path')

const getprodcut = (req,res)=>{
     res.sendFile(path.join(__dirname,'..','view','form.html'))
}

const AddProduct = (req,res)=>{
     const {name,price}= req.body
     console.log(name,price);
     res.send('Product added successfully')
}

module.exports={
     getprodcut,
     AddProduct
}