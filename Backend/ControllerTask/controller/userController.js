const getAllUsers=(req,res)=>{
     res.send('Fetches all iusers')
}

const addUser=(req,res)=>{
     res.send('Adds a new user.')
}

const getUserById=(req,res)=>{
     const userId=req.params.id;
     res.send(`Fetches user with ID: ${userId}`);
}

module.exports={
     getAllUsers,
     addUser,
     getUserById
}