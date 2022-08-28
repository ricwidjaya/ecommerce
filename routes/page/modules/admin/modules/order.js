const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin/admin-page-controller')

router.get('/', adminPageController.getOrderPage)

module.exports = router
