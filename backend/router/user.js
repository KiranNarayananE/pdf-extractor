import express from "express";
const router = express.Router();
;
import { verifyTokenAdmin } from "../middleware/auth.js";

router.post("/login", login);

export default router;