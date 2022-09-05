const express = require('express')
const router = express.Router()
// const { pageErrorHandler } = require('../../middleware/error-handler')

const admin = require('./modules/admin/')

router.use('/admin', admin)

router.get('/', (req, res) => {
  return res.render('index')
})

// Fallback route for 404 not found
// router.get('/', pageErrorHandler)

module.exports = router
