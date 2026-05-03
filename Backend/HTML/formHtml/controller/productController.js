const path = require('path')

const getprodcut = (req,res)=>{
     res.sendFile(path.join(__dirname,'..','view','form.html'))
}

const AddProduct = (req,res)=>{
     const data= req.body
     
     res.json({value:data.productName})
     
    
}

module.exports={
     getprodcut,
     AddProduct
}