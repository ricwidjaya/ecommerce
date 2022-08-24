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
  }
}

module.exports = adminController
