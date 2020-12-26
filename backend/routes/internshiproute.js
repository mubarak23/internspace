import express from "express";
const router = express.Router();
import {
  getInternships,
  addInternship,
  updateInternship,
  updateInternshipStatus,
  singleInternshipById,
} from "../controllers/internshipController.js";
import { protect } from "../middleware/authMiddleware.js";
router.route("/").get(getInternships).post(protect, addInternship);
router
  .route("/:id")
  .get(singleInternshipById)
  .post(protect, updateInternshipStatus)
  .put(protect, updateInternship);

export default router;
