const { DataTypes } = require('sequelize')
const sequelize = require('../util/dbConnection')



const User = sequelize.define('User',{
     id:{
     type:DataTypes.INTEGER,
     primaryKey:true,
     autoIncrement:true,
     allowNull:false
     },
     name:{
          type:DataTypes.STRING,
          allowNull:false
     },
     email:{
          type:DataTypes.STRING,
          allowNull:false
     }
})

const Buses=sequelize.define('Buses',{
     id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true,
          allowNull:false
     },
     busNumber:{
          type:DataTypes.INTEGER,
          allowNull:false
     },
     totalSeats:{
          type:DataTypes.INTEGER,
          allowNull:false
     },
     availableSeats:{
          type:DataTypes.INTEGER,
          allowNull:false
     }
})

const Booking=sequelize.define('Booking',{
     id:{
          type:DataTypes.INTEGER,
          autoIncrement:true,
          primaryKey:true
     },
     seatNumber:{
          type:DataTypes.INTEGER,
          allowNull:false
     }
})

const Payment = sequelize.define('payment',{
     id:{
          type:DataTypes.INTEGER,
          primaryKey:true,
          autoIncrement:true,
          allowNull:false
     },
     amountPaid:{
          type:DataTypes.INTEGER,
          allowNull:false
     },
     paymentStatus:{
          type:DataTypes.STRING,
          allowNull:false
     }
})

module.exports={
     User,
     Booking,
     Buses,
     Payment
}