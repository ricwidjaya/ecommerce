const adminController = {
  getOrder: async (req, res, next) => {
    try {
      return res.render('admin/order')
    } catch (error) {
      next(error)
    }
  }
}

module.exports = adminController
