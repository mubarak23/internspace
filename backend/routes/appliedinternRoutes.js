import express from "express";
const router = express.Router();
import { appliedForIntership } from "../controllers/appliedinternshipController.js";
import { protect } from "../middleware/authMiddleware.js";
import { internauth } from "../middleware/internMiddleware.js";

router.route("/:id").get(internauth, appliedForIntership);
export default router;
