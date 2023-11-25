const express = require("express");
const UserModel = require("../models/User");
const jwt = require("jsonwebtoken");
const router = express.Router();

// register function
router.post("/register", async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    username,
    password,
    likedSongs,
    likedPlaylist,
    subscribedArtists,
  } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (user) return res.status(400).json({ message: "user already exists" });
  const newUser = new UserModel({
    firstName: firstName,
    lastName: lastName,
    email: email,
    username: username,
    password: password,
    likedSongs: likedSongs,
    likedPlaylist: likedPlaylist,
    subscribedArtists: subscribedArtists,
  });
  await newUser.save();
  res.json({ message: "user successfully registered" });
});

// login function
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email: email });

  if (!user) return res.status(400).json({ message: "user does not exists" });

  if (user.password != password) {
    return res.status(400).json({ message: "passwords do not match" });
  }
  // i
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.cookie("jwt", token, {
    withCredentials: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000,
  });
  res.status(200).json({ token, id: user._id });
});

// logout function
router.get("/logout", (req, res) => {
  // res.cookie("jwt", "", { maxAge: 1 });
  res.cookie("jwt", "", {
    expires: new Date(0),
    httpOnly: true,
  });
  res.status(200).json({ message: "successfully logged out" });
});

module.exports = router;
