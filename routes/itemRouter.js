import { Router } from 'express';
import itemController from '../controllers/itemController.js';

const router = Router();


router.post('/', itemController.create);
router.get('/:id', itemController.getAll);

export default router;