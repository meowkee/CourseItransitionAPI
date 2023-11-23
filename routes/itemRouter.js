import { Router } from 'express';
import itemController from '../controllers/itemController.js';

const router = Router();

router.post('/', itemController.create);
router.get('/col/:id', itemController.getAll);
router.get('/:id', itemController.getOne);

export default router;