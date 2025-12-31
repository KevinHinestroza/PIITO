import express from 'express';
import { getEvents, createEvent } from '../controllers/mobilizationController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getEvents);
router.post('/', authMiddleware, rbacMiddleware(['operator', 'admin']), createEvent);

export default router;
