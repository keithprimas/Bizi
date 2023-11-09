const router = require('express').Router();

const apiRoutes = require('./api'); // prob need to check this
const hompageroutes = require('./homepage-routes'); 
const userRoutes = require('./api/user-router')
const inputsroute = require('./api/inputs-routes');

// need to check if these work properly... Need to get homeroute or input route to work
router.use('/', hompageroutes);
router.use('/api', apiRoutes);
router.use('/login', userRoutes);
router.use('/inputs', inputsroute);

module.exports = router;

