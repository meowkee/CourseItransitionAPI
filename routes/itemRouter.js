const Router = require('express');
const itemController = require('../controllers/itemController');
const router = new Router();

router.post('/', itemController.create);
router.get('/:id', itemController.getAll);

module.exports = router;