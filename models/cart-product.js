'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class CartProduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CartProduct.belongsTo(models.Product)
      CartProduct.belongsTo(models.Cart)
    }
  }
  CartProduct.init(
    {
      CartId: DataTypes.INTEGER,
      ProductId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'CartProduct',
      tableName: 'CartProducts',
      underscored: true
    }
  )
  return CartProduct
}
