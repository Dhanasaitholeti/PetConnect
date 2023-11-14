import { authmiddleware } from "../middlewares/authMiddleware";
import {
  userSignup,
  userLogin,
  getAllUsers,
  createChat,
  getUserByToken,
  starPet,
  getFavourites,
} from "../controllers/userController";
import { Router } from "express";
const router = Router();

router.post("/login", userLogin);
router.post("/signup", userSignup);
router.get("/getusers", getAllUsers);
router.post("/createchat", createChat);
router.post("/starit", starPet);
router.get("/getuser", authmiddleware, getUserByToken);
router.get("/favourites", authmiddleware, getFavourites);

export default router;
