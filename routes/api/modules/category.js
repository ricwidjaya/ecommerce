const express = require('express')
const router = express.Router()

const categoryController = require('../../../controllers/api/category-controllers')

router.get('/', categoryController.getCategories)
router.post('/', categoryController.postCategory)

module.exports = router
