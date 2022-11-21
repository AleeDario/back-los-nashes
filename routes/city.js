const router = require('express').Router();
const schema = require('../schemas/city');
const validator = require('../middlewares/validator');

let { create, read, readOne, update, destroyOne } = require('../controllers/city');

router.route('/')
    .post(validator(schema),create)
    .get(read)

router.route('/:id')
    .get(readOne)
    .put(update)
    .delete(destroyOne)

module.exports = router;