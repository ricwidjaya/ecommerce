const { Product } = require('../../models')

const productController = {
  postProduct: async (req, res, next) => {
    try {
      const { name, price, category, inventory, description } = req.body
      const { files } = req
      
      // Test
      console.log(files)

      // const newProduct = await Product.create({
      //   name,
      //   price,
      //   category,
      //   inventory,
      //   description
      // })

      return res.json({
        status: 'success'

        // data: newProduct
      })
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = productController
