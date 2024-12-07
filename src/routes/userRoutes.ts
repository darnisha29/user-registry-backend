import { Router } from "express";
import { createUser, fetchUsers } from "../controllers/userController";

const router = Router();

router.post("/user", createUser);
router.get("/users", fetchUsers);

export default router;
