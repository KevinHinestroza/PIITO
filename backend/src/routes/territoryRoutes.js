import express from 'express';
import { getTerritories, createTerritory } from '../controllers/territoryController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, getTerritories);
router.post('/', authMiddleware, rbacMiddleware(['admin']), createTerritory);

export default router;
