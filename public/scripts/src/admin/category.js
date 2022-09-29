const api = require('../api')

renderCategoryTable()

async function renderCategoryTable() {
  const categoryData = await api.getCategories()
  const table = document.querySelector('#tableBody')
  let rawHTML = ''
  categoryData.forEach(category => {
    rawHTML += `
      <tr data-category-id='${category.id}'>
        <td>
          <input class="form-check-input" type="checkbox" value="${category.id}">
        </td>
        <td>${category.id}</td>
        <td>${category.name}</td>
        <td>${category.productAmount}</td>     
        <td>
          <div class='dropdown'>
            <button
              class='btn'
              type='button'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              <i class='bi bi-three-dots'></i>
            </button>
            <ul class='dropdown-menu'>
              <li><a class='dropdown-item' href='/admin/category/${category.id}/edit'>Edit</a></li>
              <li><a class='dropdown-item text-danger'
              data-category-id='${category.id}' data-btn='delete'>Delete</a></li>
            </ul>
          </div>
        </td>
      </tr>
      `
  })

  table.innerHTML = rawHTML

  // Wait for table rendering finished, add delete listeners
  await addDeleteListener()
}

function addDeleteListener() {
  // Select all delete btn
  const deleteCategoryBtns = document.querySelectorAll("a[data-btn='delete']")

  deleteCategoryBtns.forEach(btn => {
    btn.addEventListener('click', async event => {
      const categoryId = event.target.dataset.categoryId
      // delete category, error will be 'undefined' if success
      const error = await api.deleteCategory(categoryId)
      if (!error) {
        const categoryRow = document.querySelector(
          `tr[data-category-id='${categoryId}']`
        )
        categoryRow.remove()
      }
    })
  })
}
