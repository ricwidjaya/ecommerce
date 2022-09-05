const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin-page-controllers')

router.get('/', adminPageController.getCategoryPage)

module.exports = router
