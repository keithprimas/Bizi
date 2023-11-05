const User = require('./user');
const post = require('./post');

post.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

module.exports = {
    User,
    post
};