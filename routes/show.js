let router = require('express').Router();

let {create, read, update} = require('../controllers/show');

router.post('/', create);
router.get('/', read);
router.patch('/:id', update);

module.exports = router;