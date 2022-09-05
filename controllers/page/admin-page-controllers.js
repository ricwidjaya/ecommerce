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
  }
}

module.exports = adminPageController
