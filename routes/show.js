let router = require('express').Router();
const passport = require('../config/passport')
const validator = require('../middlewares/validator');
const schema = require('../schemas/show');

let {create, read, update, destroyOne} = require('../controllers/show');

router.get('/', read);
router.post('/', passport.authenticate("jwt", { session: false }), validator(schema), create);
router.patch('/:id', passport.authenticate("jwt", { session: false }),  update);
router.delete('/:id', passport.authenticate("jwt", { session: false }),  destroyOne);

module.exports = router;