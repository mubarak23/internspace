import express from "express";
const router = express.Router();
import {
  addInternship,
  updateInternship,
  updateInternshipStatus,
} from "../controllers/internshipController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").post(protect, addInternship);
router
  .route("/:id")
  .post(protect, updateInternshipStatus)
  .put(protect, updateInternship);

export default router;
