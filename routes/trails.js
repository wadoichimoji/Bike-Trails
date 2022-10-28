var express = require('express');
var router = express.Router();
const trailsCtrl = require('../controllers/trails');
const isLoggedIn = require('../config/auth')

router.get('/', trailsCtrl.index);
router.get('/new', isLoggedIn, trailsCtrl.new);
router.get('/:id',isLoggedIn, trailsCtrl.show);
router.post('/', isLoggedIn,  trailsCtrl.create);
router.get('/:id/edit',isLoggedIn, trailsCtrl.edit)
router.put('/:id',isLoggedIn, trailsCtrl.update)







module.exports = router;