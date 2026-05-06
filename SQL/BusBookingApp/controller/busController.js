const db= require('../util/dbConnection')

const connection = require('../util/dbConnection')

const  {User,Buses,Booking,Payment} = require('../model/bus')

const { Op } = require('sequelize')

const addEntryforuser = async(req,res)=>{
     try {
          const {name,email}=req.body

          const user = await  User.create({
               name:name,
               email:email
          })
          res.status(201).send(`user with name ${name} is created `)
     } catch (error) {
          res.status(500).send('unable to create entry')
     }
}

const addEntryforBus = async(req,res)=>{
     try {
          const {busNumber,totalSeats,availableSeats}=req.body

          const bus = await  Buses.create({
               busNumber:busNumber,
               totalSeats:totalSeats,
               availableSeats:availableSeats
          })
          res.status(201).send(`bus with number ${busNumber} is added `)
     } catch (error) {
          res.status(500).send('unable to create entry')
     }
}

const booking = async(req,res)=>{
     try {
          const {seatNumber}=req.body

          const booking = await  Booking.create({
               seatNumber:seatNumber
               
          })
          res.status(201).send(`booking with seat number ${seatNumber} is created `)
     } catch (error) {
          res.status(500).send('unable to create entry')
     }
}

const payment = async(req,res)=>{
     try {
          const {amountPaid,paymentStatus}=req.body

          const user = await  Payment.create({
               amountPaid:amountPaid,
               paymentStatus:paymentStatus
          })
          res.status(201).send(`payment added  `)
     } catch (error) {
          res.status(500).send('unable to create entry')
     }
}

 const allUser = async (req,res)=>{
     try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
 }

 const allBus = async (req,res)=>{
     try {
          const buses = await Bus.findAll({
  where: {
    availableSeats: {
      [Op.gt]: 10
    }
  }
});
     res.status(200).json(buses)
} catch (error) {
          res.status(500).json({ message: "Error fetching users", error })
     }
 }

module.exports={
     allBus,
     allUser,
     addEntryforBus,
     addEntryforuser,
     payment,
     booking,
}