const db=require('../util/dbConnection')

const connection =require('../util/dbConnection')



const addEntryForUser = (req,res)=>{

     const {name,email} = req.body

     const query=`insert into user (user_name,email)  values(?,?)`

     db.execute(query,[name,email],(err)=>{
          if(err){
               console.log(err);

               res.status(500).send(err.message)
               
               return
               
          }
          res.status(200).send(`data adde with name ${name}`)
     })
}

const addEntryForBus =(req,res)=>{
     const{busNumber,totalSeats,availableSeats}=req.body

     const query = `insert into buses (busNumber,totalSeats,availableSeats) values(?,?,?)`

     db.execute(query,[busNumber,totalSeats,availableSeats],(err)=>{
          if(err){
               console.log(err);

               res.status(500).send(err.message)
               

               return
               
          }
          res.status(200).send(`data added into bus number ${busNumber}`)
     })
}

const getUser =(req,res)=>{
     const query=`select * from user`

     db.execute(query,(err , result)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               
               return
               
          }
          res.status(200).json(result)
     })
}


const getbus=(req,res)=>{
     const seats=req.params.seats
     const query = `select * from buses where availableSeats > 10`

     db.execute(query,[seats],(err,result)=>{
          if(err){
               console.log(err)
               res.status(500).send(err.message)
               
               return
               
          }
          res.status(200).json(result)
     })
}
module.exports={
     addEntryForBus,
     addEntryForUser,
     getUser,
     getbus
}