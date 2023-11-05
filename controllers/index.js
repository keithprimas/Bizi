const router = require('express').Router();

const apiRoutes = require('./api/');
const hompageroutes = require('./homepage-routes.js');


router.use('/api', apiRoutes);
router.use('/', hompageroutes)



module.exports = router;

