import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getPets = async (req: Request, res: Response) => {
  try {
    const petsData = await prisma.pet.findMany();
    res.status(200).json(petsData);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unabel to get the pets Data" });
  }
};

export const getPetById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const petData = await prisma.pet.findFirst({
      where: {
        id,
      },
    });
    console.log(petData);
    res.status(200).json({ petData });
  } catch (error) {
    res.status(500).json({ message: "unable to get Data" });
  }
};

export const newPet = async (req: Request, res: Response) => {
  const { breed, category, description, imageUrl, price, userid } = req.body;
  try {
    const createdPet = await prisma.pet.create({
      data: {
        category,
        breed,
        description,
        image_url: imageUrl,
        price,
        seller: {
          connect: {
            id: userid,
          },
        },
      },
    });
    res.json(200).json({ data: "it is from newPet" });
  } catch (error) {}
};

export const updatePet = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.json(200).json({ message: "it is from updatePet" });
  } catch (error) {}
};

export const removePet = (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    res.json(200).json({ message: "it is from removePet" });
  } catch (error) {}
};
