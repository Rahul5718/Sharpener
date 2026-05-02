const getCartForUser=(req,res)=>{
     res.send('Fetches the cart for a user.')
}

const addProductToCart=(req,res)=>{
     res.send('Adds a product to the user\'s cart.')
}

module.exports={
     getCartForUser,
     addProductToCart
}