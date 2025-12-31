import express from 'express';
import { login, register } from '../controllers/authController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import { rbacMiddleware } from '../middleware/rbacMiddleware.js';

const router = express.Router();

router.post('/login', login);
router.post('/register', authMiddleware, rbacMiddleware(['admin']), register);

export default router;
