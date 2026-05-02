const express = require('express')

const router = express.Router()

const cartController = require('../controller/cartController')

router.get('/:userId', cartController.getCartById)

router.post('/:userId', cartController.addToCart)

module.exports = router