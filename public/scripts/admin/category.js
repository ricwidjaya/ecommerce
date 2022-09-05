const axios = require('axios').default
axios
  .get('/api/category')
  .then(res => {
    console.log(res)
  })
  .catch(err => console.log(err))
