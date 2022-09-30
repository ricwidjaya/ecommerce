const adminPageController = {
  getOrderPage: async (req, res, next) => {
    try {
      return res.render('admin/order', {
        layout: 'admin',
        route: 'order'
      })
    } catch (error) {
      next(error)
    }
  },

  getCustomerPage: async (req, res, next) => {
    try {
      return res.render('admin/customer', {
        layout: 'admin',
        route: 'customer'
      })
    } catch (error) {
      next(error)
    }
  },

  getProductPage: async (req, res, next) => {
    try {
      return res.render('admin/product', {
        layout: 'admin',
        route: 'product'
      })
    } catch (error) {
      next(error)
    }
  },

  // New product page
  getNewProductPage: async (req, res, next) => {
    try {
      return res.render('admin/product-form', {
        layout: 'admin',
        script: 'admin/product-form',
        isForNewProduct: true
      })
    } catch (error) {
      next(error)
    }
  },

  // Category page
  getCategoryPage: async (req, res, next) => {
    try {
      return res.render('admin/category', {
        layout: 'admin',
        route: 'category',
        script: 'admin/category'
      })
    } catch (error) {
      next(error)
    }
  },

  // Get category form page
  getCategoryForm: async (req, res, next) => {
    try {
      if (req.path === '/new') {
        return res.render('admin/category-form', {
          layout: 'admin',
          route: 'new',
          script: 'admin/category-form'
        })
      } else {
        return res.render('admin/category-form', {
          layout: 'admin',
          route: 'edit',
          script: 'admin/category-form'
        })
      }
    } catch (error) {
      next(error)
    }
  }
}

module.exports = adminPageController
