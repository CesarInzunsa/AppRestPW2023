import { Router } from "express";
import * as institutesController from "../controllers/institutes.controller";

const router = Router();

// Este bloque crece por cada nueva API relacionada con institutos que tu agregues.

//GET ALL INSTITUTES
router.get("/", institutesController.getInstitutesAll);

export default router;