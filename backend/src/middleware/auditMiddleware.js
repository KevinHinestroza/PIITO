import { logAction } from '../utils/logger.js';

export const auditMiddleware = (req, res, next) => {
  if (req.user) {
    logAction(req.user.id, req.method, req.originalUrl, req.body);
  }
  next();
};
