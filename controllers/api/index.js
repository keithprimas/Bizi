const router = require('express').Router(); // this is good 

const userRoutes = require('./user-router'); // this is also good

const inputsRoutes = require('./inputs-routes');

router.use('/users', userRoutes); // this should be good 

router.use('/inputs',inputsRoutes)

router.use('/inputs',inputsRoutes)

router.use('/inputs', inputsRoutes);
module.exports = router;

