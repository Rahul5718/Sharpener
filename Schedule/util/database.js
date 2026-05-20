const Sequelize = require('sequelize');

const sequelize = new Sequelize('slot','root','Rahul@123', {
    dialect: 'mysql',
    host:'localhost',
   
});

(async ()=>{
     try {
          await sequelize.authenticate();
          console.log("connection has been created");
          
     } catch (error) {
          console.log(error);
          
     }
})();

module.exports=sequelize



