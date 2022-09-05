const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin-page-controllers')

router.get('/', adminPageController.getOrderPage)

module.exports = router
