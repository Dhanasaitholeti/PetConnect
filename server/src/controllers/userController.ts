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

    res.status(200).json({
      token,
      user: {
        id: EmailUsersData.id,
        name: EmailUsersData.name,
        email: EmailUsersData.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "unable to login" });
  }
};

export const userSignup = async (req: Request, res: Response) => {
  const { email, name, password } = req.body;
  console.log(req.body);
  try {
    const EmailUsersData = await getUserDataWithEmail(email);
    if (EmailUsersData)
      return res.send(400).json({
        message: "Email is already in use, Try with a different email",
      });

    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const NewUser = await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    });

    res.status(201).json({ message: "Created New User" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "unable to create new Account" });
  }
};

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await prisma.user.findMany({
      include: {
        pets: true,
        favourites: true,
        chats: {
          select: {
            id: true,
            members: true,
            messages: true,
          },
        },
      },
    });
    res.status(200).json({ data });
  } catch (error) {
    res.status(400).json({ message: "an error occured while gettign users" });
  }
};

export const starPet = async (req: Request, res: Response) => {
  const { userId, petId } = req.body;
  try {
    const data = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        favourites: {
          connect: {
            id: petId,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error starring pet:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const createChat = async (req: Request, res: Response) => {
  const { user1Id, user2Id } = req.body;

  try {
    const chatExists = await prisma.chat.findFirst({
      where: {
        members: {
          every: {
            id: {
              in: [user1Id, user2Id],
            },
          },
        },
      },
    });

    if (chatExists) {
      return res
        .status(200)
        .json({ message: "chat already exists", chatid: chatExists.id });
    }

    const newChat = await prisma.chat.create({
      data: {
        members: {
          connect: [{ id: user1Id }, { id: user2Id }],
        },
      },
    });
    res
      .status(201)
      .json({ message: "chat created successfully", chatid: newChat.id });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unabel to get the pets Data" });
  }
};

export const getUserByToken = async (req: Request, res: Response) => {
  try {
    res.status(200).json({ user: req.userData });
  } catch (error) {
    res.status(500).json({ message: "unable to get data" });
  }
};

export const getFavourites = async (req: Request, res: Response) => {
  try {
    const favs = await prisma.user.findFirst({
      where: {
        id: req.userData.id,
      },
      include: {
        favourites: {
          select: {
            id: true,
            breed: true,
            category: true,
            description: true,
            image_url: true,
            price: true,
            userid: true,
          },
        },
      },
    });
    res.status(200).json({ data: favs });
  } catch (error) {
    res.status(500).json({ message: "unable to get data" });
  }
};
