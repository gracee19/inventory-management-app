const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class OrderStatus extends Model {}

OrderStatus.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderStatus',
  }
);

module.exports = OrderStatus;
