const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {  // integer wo nulls as pk w auto increment
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: { // integer that refs product model's id
      type: DataTypes.INTEGER,
        references: { model: 'product', key: 'id' }
    },
    tag_id: {
      type: DataTypes.INTEGER, // integer that refs tag model's id
        references: { model: 'tag', key: 'id' }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
