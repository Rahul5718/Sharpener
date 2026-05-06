const db=require('../util/dbConnection')

const connection = require('../util/dbConnection')

const retrive=(req,res)=>{
     const query=`select * from student`

     db.execute(query,(err,result)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               return
               
          }

          res.status(200).send(result)
     })
}

const retriveId= (req,res)=>{
     const {id}=req.params

     const query = `select * from student where id=?`

     db.execute(query,[id],(err,result)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               return
               
          }
          if(result.affectedRows===0){
               res.status(404).send(`student not found with id:${id}`)
          }
          res.status(200).send(result)
     })
}

const addEntry=(req,res)=>{
     const{name,email,age}=req.body

     const query=`insert into student (name,email,age) values(?,?,?)`

     db.execute(query,[name,email,age],(err)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               return
               
          }
          res.status(200).send(`values are inserted into student with name ${name}`)
     })
}

const updateEntry=(req,res)=>{
     const{id}=req.params
     
     const {name}=req.body

     const {email}=req.body

     const query=`update student set email=? ,name=?  where id=?`

     db.execute(query,[email,name,id],(err,result)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               db.end()
               return    
          }
          if(result.affectedRows===0){
               res.status(404).send('student not found')
               return
          }

          res.status(200).send('student has been updated')
     })

}

const deleteEntry = (req,res)=>{
     const {id}= req.params

     const query= `delete from student where id=?`

     db.execute(query,[id],(err,result)=>{
          if(err){
               console.log(err);
               res.status(500).send(err.message)
               return
               
          }
          if(result.affectedRows===0){
               res.status(404).send('student not found')
               return
          }

          res.status(200).send(`student has been deleted with id : ${id}`)
     })
}

module.exports={
     retrive,
     addEntry,
     updateEntry,
     deleteEntry,
     retriveId
}