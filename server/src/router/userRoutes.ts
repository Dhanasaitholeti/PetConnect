import {
  userSignup,
  userLogin,
  getAllUsers,
  createChat,
} from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getusers", getAllUsers);
router.post("/createchat", createChat);

export default router;
