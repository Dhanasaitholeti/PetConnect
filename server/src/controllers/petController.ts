import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPets = async (Req: Request, res: Response) => {
  try {
    const petsData = await prisma.pet.findMany();
    res.status(200).json([petsData]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unabel to get the pets Data" });
  }
};

export const newPet = (Req: Request, res: Response) => {
  res.json(200).json({ message: "it is from newPet" });
};

export const updatePet = (Req: Request, res: Response) => {
  res.json(200).json({ message: "it is from updatePet" });
};

export const removePet = (Req: Request, res: Response) => {
  res.json(200).json({ message: "it is from removePet" });
};
