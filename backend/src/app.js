import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import territoryRoutes from './routes/territoryRoutes.js';
import electoralRoutes from './routes/electoralRoutes.js';
import analyticsRoutes from './routes/analyticsRoutes.js';
import simulationRoutes from './routes/simulationRoutes.js';
import mobilizationRoutes from './routes/mobilizationRoutes.js';
import auditRoutes from './routes/auditRoutes.js';
import { auditMiddleware } from './middleware/auditMiddleware.js';

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(auditMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/territories', territoryRoutes);
app.use('/api/electoral', electoralRoutes);
app.use('/api/analytics', analyticsRoutes);
app.use('/api/simulations', simulationRoutes);
app.use('/api/mobilization', mobilizationRoutes);
app.use('/api/audit', auditRoutes);

export default app;
