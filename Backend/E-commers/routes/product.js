const express = require('express')

const router = express.Router()

const productController = require('../controller/productController')

router.get('/',productController.getprodcut)

router.post('/',productController.AddProduct)

router.get('/:id',productController.getProductById)

module.exports= router