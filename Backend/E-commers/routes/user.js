const express = require('express')

const router = express.Router()

const userController = require('../controller/userController')

router.get('/',userController.getuser)

router.post('/',userController.createUser)

router.get('/:id',userController.getUserById)

module.exports= router