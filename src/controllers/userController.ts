import { Request, Response } from "express";
import { addUser, getUsers } from "../services/userService";


export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const {id, firstName, lastName, address, phone, email } = req.body;
    await addUser(id,firstName, lastName, address, phone, email);
    res.status(201).json({ message: "User added successfully" });
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};

export const fetchUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
};
