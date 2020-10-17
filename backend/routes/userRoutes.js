import express from "express";
import { authUser } from "../controllers/userController.js";
const router = express.Router();
router.options("/login", authUser);

export default router;
