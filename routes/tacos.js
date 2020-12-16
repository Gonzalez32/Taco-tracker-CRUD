var express = require('express');
var router = express.Router();
const tacoCtrl = require('../controllers/tacos')


router.get('/new', tacoCtrl.new)
router.post('/', tacoCtrl.create)
router.get('/', tacoCtrl.index)
router.delete('/:id', tacoCtrl.delete)
router.get('/:id', tacoCtrl.show)
router.put('/:id', tacoCtrl.update)

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });




module.exports = router;
