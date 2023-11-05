const router = require('express').Router();

const apiRoutes = require('./api/'); // prob need to check this
const hompageroutes = require('./homepage-routes.js'); // this too 
const userRoutes = require('./api/user-router')

// need to check if these work properly 
router.use('/api', apiRoutes);
router.use('/home', hompageroutes);
router.use('/login', userRoutes);

module.exports = router;

