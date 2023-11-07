const router = require('express').Router();
const { User, Post } = require('../Models');

// Load the login page on root route
router.get('/', async (req, res) => {

  // render login or render the builder itself.. based on the req.session's data: 
  // {"cookie":{"originalMaxAge":300000,"expires":"2023-11-06T23:30:40.122Z","secure":false,"httpOnly":true,"path":"/","sameSite":"strict"},"user_id":2,"logged_in":true}

  console.log('abc123', JSON.stringify(req.session));

  if (req.session.user_id)
  {
    res.render('home', { layout: 'main'});
  } else {
    res.redirect(302, '/login');
  }
});


/// look at this - Alejandro
if (req.session.login)
{
  res.render('home', {layout: main})
} else {
  res.redirect(302, '/home');
};

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
