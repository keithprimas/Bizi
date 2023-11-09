const { Model, DataTypes } = require('sequelize');
const sequelize = require('../Connection/config');

class Input extends Model {}

Input.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email_address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_location: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    personal: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    company: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'input',
  }
);

module.exports = Input;

