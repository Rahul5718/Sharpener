const express = require('express')

const router = express.Router()


const busController=require('../controller/busController')
const { route } = require('../../mapingDB/route/studenRoute')

router.post('/add',busController.addEntryForBus)
router.post('/register',busController.addEntryForUser)

router.get('/userlist',busController.getUser)
router.get('/available/:seats',busController.getbus)


module.exports=router