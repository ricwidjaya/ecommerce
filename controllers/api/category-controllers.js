const { Category } = require('../../models')

const categoryController = {
  // Get all categories
  getCategories: async (req, res, next) => {
    try {
      const categories = await Category.findAll({
        raw: true,
        nest: true
      })

      return res.json({
        status: 'success',
        data: categories
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = categoryController
