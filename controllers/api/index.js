const router = require('express').Router(); // this is good 

const userRoutes = require('./user-router'); // this is also good

const inputsRoutes = require('./inputs-routes');

router.use('/users', userRoutes); // this is good 

router.use('/inputs', inputsRoutes); // this is good 

module.exports = router;

