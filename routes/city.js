const router = require('express').Router();
const schema = require('../schemas/city');
const validator = require('../middlewares/validator');
const passport = require('../config/passport')

let { create, read, readOne, update, destroyOne, readAdminCities } = require('../controllers/city');

router.route('/')
    .post(validator(schema),create)
    .get(read)

router.route('/:id')
    .get(readOne)
    .put(passport.authenticate("jwt", { session: false }),update)
    .delete(passport.authenticate("jwt", { session: false }),destroyOne)

module.exports = router;