import { Router } from "express";
import * as labelsController from "../controllers/labels.controller";

const router = Router();

// GET
router.get("/", labelsController.getLabelsAll);

export default router;