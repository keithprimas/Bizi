const router = require('express').Router();

const apiRoutes = require('./api/');
// add homepage api once the api js has been made 
// add input api once the api js has been made 


router.use('/api', apiRoutes);
// add router.use(hompage, hompageroutes)
// router input api here



module.exports = router;