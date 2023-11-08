const router = require('express').Router();
const { User, Post } = require('../Models');

// Load the login page on root route
router.get('/', (req, res) => {

  // render login or render the builder itself.. based on the req.session's data: 
  // {"cookie":{"originalMaxAge":300000,"expires":"2023-11-06T23:30:40.122Z","secure":false,"httpOnly":true,"path":"/","sameSite":"strict"},"user_id":2,"logged_in":true}

  console.log('from input route', JSON.stringify(req.session));


  res.render('inputs', { layout: 'main' });

});

module.exports = router;
