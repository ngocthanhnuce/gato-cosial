// @ts-nocheck
const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const FollowerModel = require("../models/Follower");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", authMiddleware, async (req, res) => {
  const { userId } = req;

  try {
    const user = await UserModel.findById(userId);

    const userFollowStats = await FollowerModel.findOne({ user: userId });

    return res.status(200).json({ user, userFollowStats });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

router.post("/", async (req, res) => {
  const { email, password } = req.body.user;

  if (!isEmail(email)) return res.status(401).send("Email không hợp lệ");

  if (password.length < 6) {
    return res.status(401).send("Mật khẩu phải ít nhất 6 kí tự");
  }

  try {
    const user = await UserModel.findOne({ email: email.toLowerCase() }).select(
      "+password"
    );

    if (!user) {
      return res.status(401).send("Thông tin không hợp lệ");
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res.status(401).send("Thông tin không hợp lệ");
    }

    const payload = { userId: user._id };
    jwt.sign(payload, process.env.jwtSecret, { expiresIn: "2d" }, (err, token) => {
      if (err) throw err;
      res.status(200).json(token);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).send(`Server error`);
  }
});

module.exports = router;
