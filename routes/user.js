const router = require('express').Router();
const schema = require('../schemas/user');
const schemaSignin = require('../schemas/userSignin');
const validator = require('../middlewares/validator');
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const accountExistsSignIn = require('../middlewares/accountExistsSignIn')
const accountHasBeenVerified = require('../middlewares/accountHasBeenVerified')

const { register, verify, ingresar } = require('../controllers/user');
/* const passport = require('passport'); */


router.post('/sign-up',validator(schema),accountExistsSignUp, register);
router.post('/sign-in', validator(schemaSignin), accountExistsSignIn, accountHasBeenVerified, ingresar)
router.get('/verify/:code', verify);

module.exports = router;


/* passport.authenticate('jwt', {session:false}) */
