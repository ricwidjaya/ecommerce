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

  // Get one category
  getCategory: async (req, res, next) => {
    try {
      const { id } = req.params
      const category = await Category.findByPk(id)

      return res.json({
        status: 'success',
        data: category
      })
    } catch (error) {
      next(error)
    }
  },

  // Post a category
  postCategory: async (req, res, next) => {
    try {
      let { name } = req.body

      // remove meaningless spaces from the name
      name = name.trim()
      if (!name) throw new Error('Category name is required!')

      const category = await Category.findOne({ where: { name } })

      if (category) throw new Error('Category already exists.')

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
  },

  // Put a category
  putCategory: async (req, res, next) => {
    try {
      const { id } = req.params
      let { name } = req.body

      // remove meaningless spaces from the name
      name = name.trim()
      if (!name) throw new Error('Category name is required!')

      // Find if there's duplicate category
      const duplicateCategory = await Category.findOne({ where: { name } })
      if (duplicateCategory) throw new Error('Category already exists.')

      const category = await Category.findByPk(id)

      const updatedCategory = await category.update({ name })

      return res.json({
        status: 'success',
        data: updatedCategory
      })
    } catch (error) {
      next(error)
    }
  },

  // Delete a category
  deleteCategory: async (req, res, next) => {
    try {
      const { id } = req.params

      await Category.destroy({
        where: { id }
      })

      return res.json({
        status: 'success'
      })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = categoryController
