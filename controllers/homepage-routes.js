const router = require('express').Router();
const { User, Post, Input } = require('../Models');

// Load the login page on root route
router.get('/', async (req, res) => {

  // render login or render the builder itself.. based on the req.session's data: 
  // {"cookie":{"originalMaxAge":300000,"expires":"2023-11-06T23:30:40.122Z","secure":false,"httpOnly":true,"path":"/","sameSite":"strict"},"user_id":2,"logged_in":true}

  if (req.session.user_id)
  {
    res.render('home', { layout: 'main'});
  } else {
    res.redirect(302, '/login');
  }
});


router.get('/posts', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          // attributes: ['name'],
        },
        {
          model: Input,

        }
      ],
    });

    const post = postData.map((post) => post.get({ plain: true }));

  
    res.render('main', { layout: 'main' });
    // res.render('inputs', { layout: 'main' });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/input', async (req, res) => {
  try {

    res.render('inputs', { layout: 'main' });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// route to get all cards
router.get('/card', async (req, res) => {
  const inputData = await Input.findAll().catch((err) => { 
      res.json(err);
    });
      const cards = inputData.map((input) => input.get({ plain: true }));
      res.render('card', { cards });
    });

// route to get one card
router.get('/input/:id', async (req, res) => {
  try{ 
      const inputData = await Input.findByPk(req.params.id);
      console.log("input data: ");
      console.log(inputData);
      if(!inputData) {
          res.status(404).json({message: 'No card with this id!'});
          return;
      }
      const input = inputData.get({ plain: true });
      res.render('input', input);
    } catch (err) {
        res.status(500).json(err);
    };     
});





module.exports = router;
