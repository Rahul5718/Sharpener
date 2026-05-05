const express = require('express')

const router = express.Router()

const studentController = require('../controller/studentController')

router.post('/add',studentController.addEntry)
router.put('/update/:id',studentController.updateEntry)

router.delete('/delete/:id',studentController.deleteEntry)
module.exports=router