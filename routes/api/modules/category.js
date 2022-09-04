const express = require('express')
const router = express.Router()

const categoryController = require('../../../controllers/api/category-controllers')

router.get('/', categoryController.getCategories)

module.exports = router
