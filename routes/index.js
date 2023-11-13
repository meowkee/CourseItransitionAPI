import { Router } from 'express';
import collectionRouter from './collectionRouter.js';
import commentRouter from './commentRouter.js';
import itemRouter from './itemRouter.js';
import likeRouter from './likeRouter.js';
import tagRouter from './tagRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use('/collection', collectionRouter);
router.use('/comment', commentRouter);
router.use('/item', itemRouter);
router.use('/like', likeRouter);
router.use('/tag', tagRouter);
router.use('/user', userRouter);

export default router;