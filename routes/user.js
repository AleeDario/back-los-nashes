const router = require('express').Router();
const schema = require('../schemas/user');
const schemaSignin = require('../schemas/userSignin');
const validator = require('../middlewares/validator');
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')
const mustSignIn = require('../middlewares/mustSignIn')
const passport = require('../config/passport')

const { register, verify, login, loginWithToken } = require('../controllers/user');


router.post('/sign-up',validator(schema),accountExistsSignUp, register);
router.get('/verify/:code', verify);
router.post('/sign-in', validator(schemaSignin), accountExistsSignIn, accountHasBeenVerified, login)
router.post('/token', passport.authenticate('jwt', {session: false}), mustSignIn, loginWithToken)

module.exports = router;


/* passport.authenticate('jwt', {session:false}) */
