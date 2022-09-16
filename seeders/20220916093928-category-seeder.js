'use strict'

const categories = [
  {
    name: 'Beef',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Seafood',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Pork',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Lamb',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Chicken',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  },
  {
    name: 'Duck',
    product_amount: 0,
    created_at: new Date(),
    updated_at: new Date()
  }
]

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', categories, {})
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {})
  }
}
