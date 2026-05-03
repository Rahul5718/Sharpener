const getErrorResponse=require('../util/response')

const gerResponse=require('../util/response')

const getprodcut = (req,res)=>{
     
    try{

     let prodcutId = req.params.id
          if(!prodcutId){

           let err = new Error('Product not found')
          err.statusCode = 404

          throw err
    
          }
          return gerResponse.getResponse(res,{message:'Product fetched successfully'},200)
     }
     catch(err){
          return getErrorResponse.getErrorResponse(res,err)
     }
}

const AddProduct = (req,res)=>{
    try{
     let data= req.body
     if(!data.productName){
          let err = new Error('Product name is required')
          err.statusCode = 400
          throw err
     }
     return gerResponse.getResponse(res,{message:'Product added successfully',productName:data.productName},201)
    }catch(err){
     return getErrorResponse.getErrorResponse(res,err)
    }
}   

const getProductById = (req,res)=>{
     try{
     let productId = req.params.id
          if(!productId){

           let err = new Error('Product not found')
          err.statusCode = 404

          throw err
    
          }
          return gerResponse.getResponse(res,{message:'Product fetched successfully'},200)
     }
     catch(err){
          return getErrorResponse.getErrorResponse(res,err)
     }
}
     


module.exports={
     getprodcut,
     AddProduct,
     getProductById
}
