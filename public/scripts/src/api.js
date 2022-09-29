const axios = require('axios').default

const extractResponse = res => {
  if (res.data.status === 'success') {
    return res.data.data
  } else {
    return res.data.message
  }
}

const api = {
  // Get all category data
  getCategories: async () => {
    try {
      const res = await axios.get('/api/category')
      return extractResponse(res)
    } catch (error) {
      alertUser(error)
    }
  },

  // Get single category data
  getCategory: async id => {
    try {
      const res = await axios.get(`/api/category/${id}`)
      return extractResponse(res)
    } catch (error) {
      alertUser(error)
    }
  },

  // Post new category
  postCategory: async name => {
    try {
      const res = await axios.post(`/api/category/`, { name })
      return extractResponse(res)
    } catch (error) {
      alertUser(error)
    }
  },

  // Put a category
  putCategory: async (id, name) => {
    try {
      const res = await axios.put(`/api/category/${id}`, { name })
      return extractResponse(res)
    } catch (error) {
      alertUser(error)
    }
  },

  // Delete a category
  deleteCategory: async id => {
    try {
      const res = await axios.delete(`/api/category/${id}`)
      return extractResponse(res)
    } catch (error) {
      alertUser(error)
    }
  }
}

module.exports = api

// Alert error message from backend
function alertUser(error) {
  const errorMessage = error.response.data.message
  return window.alert(errorMessage)
}
