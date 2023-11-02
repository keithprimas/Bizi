const router = require('express').Router();
const { post, user } = require('../Models/'); // linking up with the post and user file in models folder
// Define your API routes here

//  Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await post.findAll();
        res.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//  Get all users
router.get('/users', async (req, res) => {
    try {
        const users = await user.findAll();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Add more routes as needed

module.exports = router;
