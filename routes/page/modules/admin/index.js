const express = require('express')
const router = express.Router()

const category = require('./modules/category')
const product = require('./modules/product')
const customer = require('./modules/customer')
const order = require('./modules/order')

router.use('/category', category)
router.use('/product', product)
router.use('/customer', customer)
router.use('/order', order)

router.get('/', (req, res, next) => {
  return res.redirect('/admin/order')
})

module.exports = router
