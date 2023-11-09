const User = require('./user');
const Post = require('./post');
const Input = require('./input')



Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Input.belongsTo(Post, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Post,
    Input
};