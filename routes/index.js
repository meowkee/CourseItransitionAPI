const Router = require('express');
const router = new Router();
const collectionRouter = require('./collectionRouter');
const commentRouter = require('./commentRouter');
const itemRouter = require('./itemRouter');
const likeRouter = require('./likeRouter');
const tagRouter = require('./tagRouter');
const userRouter = require('./userRouter');

router.use('/collection', collectionRouter);
router.use('/comment', commentRouter);
router.use('/item', itemRouter);
router.use('/like', likeRouter);
router.use('/tag', tagRouter);
router.use('/user', userRouter);

module.exports = router;