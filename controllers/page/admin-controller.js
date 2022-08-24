const adminController = {
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
  }
}

module.exports = adminController
