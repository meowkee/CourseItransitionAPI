import { Router } from 'express';
import collectionController from '../controllers/collectionController.js';

const router = Router();

router.post('/', collectionController.create);
router.get('/us/:id', collectionController.getByUserId);
router.get('/col/:id', collectionController.getById);
router.delete('/:id', collectionController.deleteById);

export default router;