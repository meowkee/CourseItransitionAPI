import { Router } from 'express';
import collectionController from '../controllers/collectionController.js';

const router = Router();

router.post('/', collectionController.create);
router.get('/:id', collectionController.getById);

export default router;