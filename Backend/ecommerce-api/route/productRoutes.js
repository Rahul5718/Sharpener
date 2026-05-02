const express = require('express')

const router = express.Router()

const productController = require('../controllers/productController')

router.get('/',productController.getproduct)
router.get('/:id',productController.getproductbyid)
router.post('/',productController.addproduct)


module.exports=router