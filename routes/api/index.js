const express = require('express')
const router = express.Router()

const product = require('./modules/product')

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
