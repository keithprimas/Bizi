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
    phone_number: {
      type: DataTypes.STRING, // Changed to DataTypes.STRING since phone numbers are typically stored as strings
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
    userId: { 
      type: DataTypes.INTEGER, // added userID
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'inputs', // Removed freezeTableName and underscored options
  }
);

module.exports = Input;
