const getErrorResponse=require('../util/response')

const gerResponse=require('../util/response')

const getuser=(req,res)=>{
    try{
     let user= req.body

     if(!user.name ){
          let err = new Error('Name is  required')
          err.statusCode=400
          throw err
     }
     return gerResponse.getResponse(res,{message:'User fetch successfully',user},201)
    }catch(err){
     return getErrorResponse.getErrorResponse(res,err)
    }
}

const createUser=(req,res)=>{
     try{
     let user = req.body

     if(!user.name || !user.email){
          let err = new Error('Name and Email are required')
          err.statusCode=400
          throw err
     }

     return gerResponse.getResponse(res,{message:'User created successfully',user},201)
    }catch(err){
     return getErrorResponse.getErrorResponse(res,err)
    }
}

const getUserById=(req,res)=>{
     try{
     let userId = req.params.id

     if(!userId){
          let err = new Error('User ID is required')
          err.statusCode=400
          throw err
     }

     return gerResponse.getResponse(res,{message:'User fetch successfully',userId},200)
    }catch(err){
     return getErrorResponse.getErrorResponse(res,err)
    }
}

module.exports={
     getuser,
     createUser,
     getUserById
}