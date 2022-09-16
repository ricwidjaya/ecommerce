const api = require('../api')

renderCategoryTable()

async function renderCategoryTable() {
  const categoryData = await api.getCategories()
  const table = document.querySelector('#tableBody')
  let rawHTML = ''
  categoryData.forEach(category => {
    rawHTML += `
      <tr>
        <td>
          <input class="form-check-input" type="checkbox" value="${category.id}">
        </td>
        <td>${category.id}</td>
        <td>${category.name}</td>
        <td>${category.productAmount}3</td>     
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
              <li><a class='dropdown-item' href='/category/${category.id}/edit'>Edit</a></li>
              <li><a class='dropdown-item text-danger'
              data-category-id='${category.id}' >Delete</a></li>
            </ul>
          </div>
        </td>
      </tr>
      `
  })

  table.innerHTML = rawHTML
}
