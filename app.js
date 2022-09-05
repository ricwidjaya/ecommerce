const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { pages, api } = require('./routes')
const { pageErrorHandler } = require('./middleware/error-handler')
const hbs = require('express-handlebars')
const handlebarHelpers = require('./helpers/handlebar-helpers')
const methodOverride = require('method-override')

// Setting Express Handlebars
app.engine('hbs', hbs.engine({ extname: '.hbs', helpers: handlebarHelpers }))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Pages and API Routers
app.use('/', pages)
app.use('/api', api)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Steaky is running on port ${PORT}.`)
})

// 404 error handler
app.use(pageErrorHandler)