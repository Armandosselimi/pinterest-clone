import express from "express";
import {
  getUser,
  registerUser,
  loginUser,
  logoutUser,
  followUser,
} from "../controllers/user.controller.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const userInformation = req.body;
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  await User.create({
    displayName: req.body.displayName,
    username: req.body.username,
    email: req.body.email,
    hashedPassword: hashedPassword,
  });

  res.json("user created");
});

router.get("/:username", getUser);
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);
router.post("/follow/:username", verifyToken, followUser);

export default router;
