const mysql = require('mysql2')

const connection = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'Rahul@123',
     database:'testDB'
})


connection.connect((error)=>{
     if(error){
          console.log(error);
          return
     }
     console.log("connection has been created");
     

     const creationQuery = `create table if not exists students(
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(30),
     email VARCHAR(30)
     )`

     connection.execute(creationQuery,(err)=>{
          if(err){
               console.log(err);
               connection.end()
               return
          }
          console.log("table is created");
          
     })
})

module.exports=connection
