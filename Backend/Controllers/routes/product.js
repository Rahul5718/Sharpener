const express = require('express')

const router = express.Router()

const productController = require('../controller/productController')

router.get('/', productController.getProducts)

router.post('/', productController.addProduct)

router.get('/:id', productController.getProductById)

module.exports= router