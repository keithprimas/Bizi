const {Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../Connection/config');

class Post extends Model {}

Post.init (
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize,
        modelName: 'post',
    }
);

module.exports = Post;