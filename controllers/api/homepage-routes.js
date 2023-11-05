const router = require('express').Router();
const { user } = require('../Models/user');
console.log(user)
// renders home landing page
router.get('/', async (req, res) => {
  try {
    res.render('home');
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;