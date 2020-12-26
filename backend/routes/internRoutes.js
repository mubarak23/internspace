import express from "express";
const router = express.Router();
import {
  registerIntern,
  authUser,
  updateinternProfile,
} from "../controllers/internController.js";
import { protect, admin, internauth } from "../middleware/internMiddleware.js";
router.route("/").post(registerIntern);
router.route("/:id").put(internauth, updateinternProfile);
router.post("/login", authUser);

export default router;
