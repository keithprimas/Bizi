const User = require('./user');
const Post = require('./post');
const Input = require('./input')



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