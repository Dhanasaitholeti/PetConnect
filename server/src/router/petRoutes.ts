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
router.get("/:id", getPetById);
router.post("/add", newPet);
router.put("/update/:id", updatePet);
router.delete("/rm/:id", removePet);

export default router;
