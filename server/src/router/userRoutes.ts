import {
  userSignup,
  userLogin,
  getAllUsers,
} from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getusers", getAllUsers);

export default router;
