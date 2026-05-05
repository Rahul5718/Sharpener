const mysql = require('mysql2')

const connection = mysql.createConnection({
     host:'localhost',
     user:'root',
     password:'Rahul@123',
     database:'testdb'
})

connection.connect((err)=>{
     if(err){
          console.log(err);
          return
     }
     console.log("connection created");
     
     const queryUser = `
     create table if not exists user(
     user_id INT AUTO_INCREMENT PRIMARY KEY,
     user_name VARCHAR(30),
     email VARCHAR(30)
     ) `

     const queryBuses = `
     create table if not exists buses(
     bus_id INT AUTO_INCREMENT PRIMARY KEY,
     busNumber INT ,
     totalSeats INT,
     availableSeats INT)`

     const queryBookings= 
     `create table if not exists bookins(
     booking_id INT AUTO_INCREMENT PRIMARY KEY,
     seatNumber INT
     )
     `
     const queryPayment=`
     create table if not exists payments(
     payment_id INT AUTO_INCREMENT PRIMARY KEY,
     amountPaid INT,
     paymentStatus VARCHAR(30)
     )`

     connection.execute(queryUser,(err)=>{
          if(err){
               console.log(err);
               return
          }
          console.log(' user table has been created');
          
     })

      connection.execute(queryBuses,(err)=>{
          if(err){
               console.log(err);
               return
          }
          console.log(' bus table has been created');
          
     })

      connection.execute(queryBookings,(err)=>{
          if(err){
               console.log(err);
               return
          }
          console.log(' booking table has been created');
          
     })

      connection.execute(queryPayment,(err)=>{
          if(err){
               console.log(err);
               return
          }
          console.log(' payment table has been created');
          
     })
})


module.exports=connection