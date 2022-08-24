const express = require('express')
const router = express.Router()

const admin = require('./modules/admin')

router.use('/admin', admin)

router.get('/', (req, res) => {
  return res.render('index')
})

module.exports = router
