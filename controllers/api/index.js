const router = require('express').Router(); // this is good 

const userRoutes = require('./user-router'); // this is also good

router.use('/users', userRoutes); // this should be good 

module.exports = router;

