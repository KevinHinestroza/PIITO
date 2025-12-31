import express from 'express';
import { getAggregates, createAggregate } from '../controllers/electoralController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.get('/aggregates', authMiddleware, getAggregates);
router.post('/aggregates', authMiddleware, rbacMiddleware(['admin', 'analyst']), createAggregate);

export default router;
