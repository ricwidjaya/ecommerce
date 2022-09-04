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
  },

  // Post one category
  postCategory: async (req, res, next) => {
    try {
      const { name } = req.body

      if (!name) throw new Error('Category name is required!')

      const newCategory = await Category.create({
        name
      })

      return res.json({
        status: 'success',
        data: newCategory
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = categoryController
