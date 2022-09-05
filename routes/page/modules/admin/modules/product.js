const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin-page-controllers')

router.get('/', adminPageController.getProductPage)
router.get('/new', adminPageController.getNewProductPage)

module.exports = router
