
const getErrorResponse=require('../util/response')
const getResponse=require('../util/response')

const getCart=(req,res)=>{
    try{
     let userId = req.params.userId
     
     if(userId <10){
          let err =  new Error('Cart not found for the user')
          err.statusCode = 404
          throw err
     }

     return getResponse.getResponse(res,{userId,cart:[]},200)
}
catch(err){
     return getErrorResponse.getErrorResponse(res,err)
}
}


const addToCart=(req,res)=>{
     try{
     let userId = req.params.userId
     let productId = req.body.productId

     if(!userId || !productId){
          let err = new Error('User ID and Product ID are required')
          err.statusCode = 400
          throw err
     }

     return getResponse.getResponse(res,{userId,productId,message:'Product added to cart successfully'},200)
}
catch(err){
     return getErrorResponse.getErrorResponse(res,err) 

     
}
}

module.exports={
     getCart,
     addToCart
}