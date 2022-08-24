const adminController = {
  getOrder: async (req, res, next) => {
    try {
      return res.render('admin/order', {
        layout: 'admin'
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = adminController
