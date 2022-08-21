const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const { pages, api } = require('./routes')
const hbs = require('express-handlebars')

// Pages and API Routers
app.use('/', pages)
app.use('/api', api)

// Setting Express Handlebars
app.engine('hbs', hbs.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Steaky is running on port ${PORT}.`)
})
