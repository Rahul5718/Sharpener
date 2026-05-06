const express = require('express')

const router = express()

const busController = require('../controller/busController')

router.post('/user',busController.addEntryforuser)
router.post('/bus',busController.addEntryforBus)

router.get('/user',busController.allUser)
router.get('/bus/:seat',busController.allBus)

module.exports=router