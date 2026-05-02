const express = require('express')

const userController = require('../controller/userController')


const router = express.Router()

router.get('/', userController.getuser)


router.post('/', userController.adduser)


router.get('/:id', userController.getuserByid)

module.exports= router