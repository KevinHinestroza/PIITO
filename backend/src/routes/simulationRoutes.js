import express from 'express';
import { runSimulation } from '../controllers/simulationController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, rbacMiddleware(['analyst', 'admin']), runSimulation);

export default router;
