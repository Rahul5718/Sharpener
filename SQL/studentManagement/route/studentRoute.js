const express = require('express')

const router= express.Router()

const studentController = require('../studentController/studentController')



router.post('/students',studentController.addEntry)

router.put('/students/:id',studentController.updateEntry)

router.delete('/students/:id',studentController.deleteEntry)

module.exports=router
