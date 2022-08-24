const express = require('express')
const router = express.Router()

const adminController = require('../../../controllers/page/admin-controller')

router.get('/order', adminController.getOrderPage)

router.get('/', (req, res, next) => {
  return res.redirect('/admin/order')
})

module.exports = router
