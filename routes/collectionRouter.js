const Router = require('express');
const collectionController = require('../controllers/collectionController');
const router = new Router();

router.post('/', collectionController.create);
router.get('/:id', collectionController.getById);

module.exports = router;