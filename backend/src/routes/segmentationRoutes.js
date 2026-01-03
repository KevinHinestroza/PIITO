import express from "express";
import { runSegmentation } from "../controllers/segmentationController.js";
import { authenticate } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/segment", authenticate, runSegmentation);

export default router;
