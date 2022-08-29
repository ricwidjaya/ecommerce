const express = require('express')
const router = express.Router()

const multer = require('multer')
const upload = multer({ dest: 'uploads/' })

const productController = require('../../../controllers/api/product-controllers')

router.post(
  '/',
  upload.fields([{ name: 'product-images', maxCount: '5' }]),
  productController.postProduct
)

router.get('/', (req, res) => {
  return res.json({
    status: 200,
    data: {
      name: 'richard',
      product: 'meat'
    }
  })
})

module.exports = router
