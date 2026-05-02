
const getCartById=(req,res)=>{
     res.send(`Fecthing cart with Id:${req.params.id}`)
}

const addToCart=(req,res)=>{
     res.send(`Adding product to cart for user with ID:${req.params.userId}`)
}    
module.exports={
     
     getCartById,
     addToCart
}    