let router = require('express').Router();
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schema = require('../schemas/reaction');

let {create, updateReaction, read} = require('../controllers/reaction');

router.route('/')
    .post(passport.authenticate("jwt", { session: false }),validator(schema), create)
    .put(passport.authenticate("jwt", { session: false }), updateReaction)
    .get(read)

module.exports = router;