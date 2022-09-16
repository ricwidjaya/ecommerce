'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Categories', 'product_amount', {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 0
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Categories', 'product_amount')
  }
}
