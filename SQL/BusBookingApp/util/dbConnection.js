const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('busdb','root','Rahul@123',{
     host:'localhost',
     dialect:'mysql'
});

(async ()=>{
     try {
          await sequelize.authenticate()
          console.log("connection has been created");
          
     } catch (error) {
          console.log(error);
          
     }
})();

module.exports=sequelize