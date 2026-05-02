const getAllProducts=(req,res)=>{
     res.send('Fetches all products.')
}

const addProduct=(req,res)=>{
     res.send('Add a new products.')
}

const getProductById=(req,res)=>{
     const productId=req.params.id;
     res.send(`Fetches product with ID: ${productId}`);
}

module.exports={
     getAllProducts,
     addProduct,
     getProductById
}