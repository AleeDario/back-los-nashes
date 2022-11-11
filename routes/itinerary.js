let router = require('express').Router();

let {create, read, update, destroyOne} = require('../controllers/itinerary');

router.get('/', read);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroyOne);

module.exports = router;