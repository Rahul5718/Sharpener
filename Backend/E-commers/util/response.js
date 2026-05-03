const getErrorResponse = (res,err)=>{
     let statusCode= err.statusCode
     let message= err.message

     return res.status(statusCode).json({
          message:message,
          status:false
     })
}

const getResponse=(res,data,statusCode)=>{
     return res.status(statusCode).json({
          data:data,
          status:true
     })
}

module.exports={
     getErrorResponse,
     getResponse
}