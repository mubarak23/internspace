import express from "express";
const router = express.Router();
import { registerIntern, authUser } from "../controllers/internController.js";
import { protect, admin } from "../middleware/authMiddleware.js";
router.route("/").post(registerIntern);

router.post("/login", authUser);

export default router;
