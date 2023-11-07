const router = require('express').Router();

const apiRoutes = require('./api'); // prob need to check this
const hompageroutes = require('./homepage-routes'); // this too 
const userRoutes = require('./api/user-router')

// need to check if these work properly... Need to get homeroute or input route to work
router.use('/', hompageroutes);
router.use('/api', apiRoutes);
router.use('/login', userRoutes);
router.use('/home', homeroute);

module.exports = router;

