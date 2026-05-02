const productService = require('../services/productService')

const getproduct = (req,res)=>{
     // const product = productService.getproductbyid(parseInt(req.params.id))

     const product= productService.getproducts()

     // const addProduct = productService.addproduct(req.body)

     res.send(product)
}

const getproductbyid = (req,res)=>{
     const product = productService.getproductbyid(parseInt(req.params.id))
     res.send(product)
}

const addproduct = (req,res)=>{
     const addProduct = productService.addproduct(req.body)
     res.send('Product added successfully')
}

module.exports={
     getproduct,
     getproductbyid,
     addproduct
}


