const db=require('../util/dbConnection')

const connection = require('../util/dbConnection')

const Student = require('../model/student')


const addEntry =async (req,res)=>{

     try {
          const {email,name,age}= req.body

          const student = await Student.create({
               email:email,
               name:name,
               age:age
          });

          res.status(201).send(`user with name: ${name} is creates `)
     } catch (error) {
          res.status(500).send('unable to create entry.')
          
     }
}



const updateEntry= async(req,res)=>{

     try {
          const{id}=req.params
     
          const {name}=req.body

          const{email}=req.body

          const student = await Student.findByPk(id)

          if(!student){
               res.status(404).send('user not found')
          }

          student.name=name;
          student.email=email

          await student.save()

          res.status(200).send('user has been updated')

     } catch (error) {
          res.status(500).send('user cannot be updated')
     }
     


}

const deleteEntry = async(req,res)=>{
     try {
          const {id}= req.params

          const student = await Student.destroy({
               where:{
                    id:id
               }
          })

          if(!student){
               res.status(404).send('user is not found')
          }
          res.status(200).send('user is deleted')
          
     } catch (error) {
          res.status(500).send('error')
     }
    

}



module.exports={
     // retrive,
     addEntry,
     updateEntry,
     deleteEntry,
     // retriveId
}