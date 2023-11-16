import { authmiddleware } from "../middlewares/authMiddleware";
import {
  getPets,
  newPet,
  updatePet,
  removePet,
  getPetById,
} from "../controllers/petController";
import { Router } from "express";
const router = Router();

router.get("/", getPets);
router.get("/:id", authmiddleware, getPetById);
router.post("/add", authmiddleware, newPet);
router.put("/update/:id", authmiddleware, updatePet);
router.delete("/rm/:id", authmiddleware, removePet);

export default router;
