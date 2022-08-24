const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { pages, api } = require('./routes')
const hbs = require('express-handlebars')
const handlebarHelpers = require('./helpers/handlebar-helpers')

// Pages and API Routers
app.use('/', pages)
app.use('/api', api)
app.use(express.static('public'))

// Setting Express Handlebars
app.engine('hbs', hbs.engine({ extname: '.hbs', helpers: handlebarHelpers }))
app.set('view engine', 'hbs')

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Steaky is running on port ${PORT}.`)
})
