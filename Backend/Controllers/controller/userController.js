const getuser=(req,res)=>{
     res.send('Fetching all users.')
}

const getuserByid=(req,res)=>{
     res.send(`Fetching user with ID:${req.params.id}`)
}

const adduser=(req,res)=>{
     res.send('Adding a new user.')
}

module.exports={
     getuser,
     adduser,
     getuserByid
}

