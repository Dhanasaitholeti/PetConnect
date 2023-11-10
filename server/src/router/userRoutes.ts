import { userSignup, userLogin } from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);

export default router;
