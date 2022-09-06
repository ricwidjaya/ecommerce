const axios = require('axios').default

const api = {
  // Get all category data
  getCategories: async () => {
    try {
      const res = await axios.get('/api/category')
      return extractResponse(res)
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = api

const extractResponse = res => {
  if (res.data.status === 'success') {
    return res.data.data
  } else {
    return res.data.message
  }
}
