const router = require('express').Router();
const { User, Post } = require('../Models');

// Load the login page on root route
router.get('/', (req, res) => {
  res.render('login', { layout: 'main' });
});

router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // attributes: ['name'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('main', { layout: 'main' });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
