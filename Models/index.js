const User = require('./user');
const Post = require('./post');
const Input = require('./input')

User.hasMany(Input, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
  });

Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Input.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Post,
    Input
};