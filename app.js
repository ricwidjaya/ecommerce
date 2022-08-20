const express = require('express')
const app = express()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

app.get('/', (req, res) => {
  return res.send('<h1>Hello, World.</h1>')
})

app.listen(PORT, () => {
  console.log(`Steaky is running on port ${PORT}.`)
})
