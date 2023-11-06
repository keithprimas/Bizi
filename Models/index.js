const User = require('./user');
const Post = require('./post');



Post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    Post
};