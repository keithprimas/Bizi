const router = require('express').Router();
const { User, Post } = require('../Models/user');

router.get('/', async (req, res) =>{
    try {
        const dbUserData = await User.findAll ({
            include: [
                {
                    Models: Post,
                    attributes: ['username, password'],

                },
            ],
        });


        const newUser = dbUserData.map((newUser) =>
        newUser.get({ plain: true })
        );
        res.render('newpage', {
            newUser,
            loggedIn: res.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


// renders home landing page
router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders login page
router.get('/login', async (req, res) => {
  try {
    res.render('login');
  } catch (err) {
    res.status(500).json(err);
  }
});
// renders signup page
router.get('/signup', async (req, res) => {
  try {
    res.render('signup');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;