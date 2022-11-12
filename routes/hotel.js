let router = require('express').Router()

let { create, read, readOne, update, destroyOne } = require('../controllers/hotel')

router.post('/', create)
router.get('/', read)
router.get('/:id', readOne)
router.patch('/:id', update)
router.delete('/:id', destroyOne)

module.exports = router;