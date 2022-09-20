const express = require('express')
const router = express.Router()

const adminPageController = require('../../../../../controllers/page/admin-page-controllers')

router.get('/', adminPageController.getCategoryPage)
router.get('/:id/edit', adminPageController.getCategoryForm)
router.get('/new', adminPageController.getCategoryForm)

module.exports = router
