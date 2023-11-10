import { Request, Response } from "express";

export const userLogin = (req: Request, res: Response) => {
  res.status(200).json({ message: "This is from login" });
};

export const userSignup = (req: Request, res: Response) => {
  console.log("This is user Signup route");
  res.status(200).json({ message: "This is from signup" });
};
