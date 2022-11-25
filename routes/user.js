const router = require('express').Router();
const schema = require('../schemas/user');
const validator = require('../middlewares/validator');
const accountExistsSignUp = require('../middlewares/accountExistsSignUp')
const { register, verify } = require('../controllers/user');

router.post('/sign-up',validator(schema),accountExistsSignUp, register);
router.get('/verify/:code', verify);

module.exports = router;
