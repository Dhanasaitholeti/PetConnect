import { authmiddleware } from "../middlewares/authMiddleware";
import {
  userSignup,
  userLogin,
  getAllUsers,
  createChat,
  getUserByToken,
  starPet,
} from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getusers", getAllUsers);
router.post("/createchat", createChat);
router.post("/starit", starPet);
router.get("/getuser", authmiddleware, getUserByToken);

export default router;
