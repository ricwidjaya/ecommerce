const api = require('../api')
const form = document.querySelector('form')
const input = document.querySelector('#categoryName')

// http://localhost:3000/admin/category/24/edit
const url = window.location.pathname
const urlPaths = url.split('/')
const action = urlPaths.pop()

addFromListener()

async function addFromListener() {
  // Edit
  if (action === 'edit') {
    // Get current category name
    const categoryId = urlPaths.pop()
    const category = await api.getCategory(categoryId)
    input.value = category.name

    form.addEventListener('submit', async event => {
      event.preventDefault()
      const name = input.value
      if (!name) return window.alert('Please input category name.')
      const res = await api.putCategory(categoryId, name)
      if (res) return (window.location.href = '/admin/category')
    })
    // New
  } else if (action === 'new') {
    form.addEventListener('submit', async event => {
      event.preventDefault()
      const name = input.value
      if (!name) return window.alert('Please input category name.')
      const res = await api.postCategory(name)
      if (res) return (window.location.href = '/admin/category')
    })
  }
}
