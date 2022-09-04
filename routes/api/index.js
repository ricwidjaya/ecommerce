const express = require('express')
const router = express.Router()
const {
  apiErrorHandler,
  apiNotFound
} = require('../../middleware/error-handler')

const product = require('./modules/product')
const category = require('./modules/category')

router.use('/category', category)
router.use('/product', product)

router.get('/', (req, res) => {
  return res.send('<h1> Welcome to Steaky API.</h1>')
})

router.use('*', apiErrorHandler, apiNotFound)

module.exports = router
