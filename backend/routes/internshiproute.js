import express from "express";
const router = express.Router();
import {
  getInternships,
  addInternship,
  updateInternship,
  updateInternshipStatus,
  singleInternshipById,
} from "../controllers/internshipController.js";
import { protect, iscompany } from "../middleware/authMiddleware.js";
router.route("/").get(getInternships).post(protect, iscompany, addInternship);
router
  .route("/:id")
  .get(singleInternshipById)
  .post(protect, iscompany, updateInternshipStatus)
  .put(protect, iscompany, updateInternship);

export default router;
