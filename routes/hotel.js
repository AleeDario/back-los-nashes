let router = require('express').Router()

let { create, read, readOne } = require('../controllers/hotel')

router.post('/', create)
router.get('/', read)
router.get('/:id', readOne)
router.get('/shows?hotelId=id', read)




module.exports = router;