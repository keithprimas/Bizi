const router = require('express').Router();
//const { User, Post } = require('../Models');


// router.get('/login', (req, res) => {
//   if (res.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }
// })

router.get('/', (req, res) => {
  console.log("Hello")
  res.render('main', {layout: 'index'});
})

module.exports = router;
