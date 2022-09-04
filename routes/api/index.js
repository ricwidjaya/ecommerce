const express = require('express')
const router = express.Router()

const product = require('./modules/product')
const category = require('./modules/category')

router.use('/category', category)
router.use('/product', product)

router.get('/', (req, res) => {
  return res.json({
    status: 'success',
    data: {
      name: 'richard'
    }
  })
})

module.exports = router
