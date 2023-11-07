const router = require('express').Router();

const apiRoutes = require('./api'); // prob need to check this
const hompageroutes = require('./homepage-routes'); // this too 
const userRoutes = require('./api/user-router');

const inputRoutes = require('./input-routes');
//const inputApiRoutes = require('./api/user-router');

// need to check if these work properly 
router.use('/', hompageroutes);
router.use('/api', apiRoutes);
router.use('/login', userRoutes);
router.use('/input', inputRoutes);

module.exports = router;

