const express = require('express')

const router = express.Router()

const cartController = require('../controller/cartController')

router.get('/:userId', cartController.getCart)

router.post('/:userId', cartController.addToCart)

module.exports = router