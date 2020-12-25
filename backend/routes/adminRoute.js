import express from "express";
const router = express.Router();
import { authAdmin, registerAdmin } from "../controllers/adminController.js";
router.route("/").post(registerAdmin);

router.post("/login", authAdmin);

export default router;
