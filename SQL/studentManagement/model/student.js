const {Sequelize,DataTypes}=require('sequelize')

const sequelize = require('../util/dbConnection')

const Student = sequelize.define('Students',{
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

module.exports=Student