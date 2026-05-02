const express= require('express')

const router = express.Router()

const cartController = require('../controller/cartController')

router.get('/',cartController.getCartForUser)

router.post('/',cartController.addProductToCart)

module.exports=router