import express from 'express';
import { getLogs } from '../controllers/auditController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware, rbacMiddleware(['admin']), getLogs);

export default router;
