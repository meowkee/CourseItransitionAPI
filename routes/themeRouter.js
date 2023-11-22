import Router from 'express';
import themeController from '../controllers/themeController.js';
const router = new Router();

router.get('/', themeController.getAll);

export default router;