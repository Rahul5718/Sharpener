const mysql = require('mysql2')

const connection = mysql.createConnection({
     host:"localhost",
     user:"root",
     password:"Rahul@123",
     database:"student"
})

connection.connect((err)=>{
     if(err){
          console.log(err)
          return
     }

     const query= `create table if not exists student(
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30),
     email VARCHAR(30),
     age INT )`

     connection.execute(query,(err)=>{
          if(err){
               console.log(err);
               return
               
          }
          console.log("table created for student");
          
     })
})

module.exports=connection