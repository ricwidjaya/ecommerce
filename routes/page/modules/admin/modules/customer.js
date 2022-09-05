const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin-page-controllers')

router.get('/', adminPageController.getCustomerPage)

module.exports = router
