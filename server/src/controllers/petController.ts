import { Request, Response } from "express";

export const getPets = (Req: Request, res: Response) => {
  res.json(200).json({ message: "it is from getPets" });
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
