let router = require('express').Router();

let {create, read} = require('../controllers/itinerary');

router.get('/', read);
router.post('/', create);

module.exports = router;