import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

import { tokenGenerator } from "../utils/tokenGenerator";
import { getUserDataWithEmail } from "../utils/helpers/emailData";

const prisma = new PrismaClient();

export const userLogin = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const EmailUsersData = await getUserDataWithEmail(email);
    if (!EmailUsersData)
      return res.status(403).json({ message: "Invalid Credentials" });

    const passwdRes = await bcrypt.compare(
      password,
      EmailUsersData.password_hash
    );

    if (!passwdRes)
      return res
        .status(403)
        .json({ message: "Password provided is incorrect" });

    const token = await tokenGenerator({
      UserId: EmailUsersData.id,
      Email: EmailUsersData.email,
    });

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "unable to login" });
  }
};

export const userSignup = async (req: Request, res: Response) => {
  const { email, name, Password, role } = req.body;
  try {
    const EmailUsersData = await getUserDataWithEmail(Email);
    if (EmailUsersData)
      return res.send(400).json({
        message: "Email is already in use, Try with a different email",
      });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(Password, salt);

    const NewUser = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
        role,
      },
    });
    res.status(201).json({ message: "Created New User", Data: NewUser });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "unable to create new Account" });
  }
};
