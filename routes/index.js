let router = require('express').Router();

let user = require('./user');


router.use('/api/users', user);
 
module.exports = router;
