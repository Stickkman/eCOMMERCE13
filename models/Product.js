// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {  // integer type, no nulls, pk, autoincrement
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: { // string wo nulls
      type: DataTypes.STRING,
      allowNull: false
    },
    price: { // decimal wo nulls, validation check for decimal
      type: DataTypes.DECIMAL,
      allowNull: false,
        validate: { isDecimal: true }
    },
    stock: { // integer wo nulls, defaults to 10, validation check for numeric
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
        validate: { isNumeric: true }
    },
    category_id: { // integer that refs cateogry models id 
      type: DataTypes.INTEGER,
      allowNull: false,
        references: { model: 'category', key: 'id' }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
