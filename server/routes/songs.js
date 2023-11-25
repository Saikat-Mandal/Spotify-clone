const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const SongModel = require("../models/Song");
const UserModel = require("../models/User");

// song create function
router.post("/create", async (req, res) => {
  const { name, thumbnail, track } = req.body;

  if (!name || !thumbnail || !track) {
    return res.status(301).json({ message: "insufficient info" });
  }

  const token = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const artist = token.id;
  const songDetail = {
    name: name,
    thumbnail: thumbnail,
    track: track,
    artist: artist,
  };

  const createdSong = await SongModel.create(songDetail);

  res.status(200).json(createdSong);
});

// get all songs of a particular user
router.get("/get/mysongs", async (req, res) => {
  const token = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const user = await UserModel.findById(token.id);
  const songs = await SongModel.find({ artist: user._id }).populate("artist");
  // const songs = await SongModel.find({ artist: user._id });
  res.status(200).json(songs);
});

// get all songs that any artist has published
// i will send the artist id and see the songs published by that artist
router.get("/get/artist/:artistId", async (req, res) => {
  const artistId = req.params.artistId;

  const artist = await UserModel.findById(artistId);

  if (!artist) return res.status(301).json({ message: "user does not exists" });

  const songs = await SongModel.find({ artist: artistId });
  res.status(200).json(songs);
});

// route to get a single song by name
router.get("/get/songname/:songName", async (req, res) => {
  try {
    const songName = req.params.songName;
    const songs = await SongModel.find({ name: songName }).populate("artist");;
    res.status(200).json(songs);
  } catch (error) {
    res.json(error);
  }
});

// get all songs
router.get("/get/allsongs", async (req, res) => {
  const songs = await SongModel.find({});
  return res.status(200).json(songs);
});

module.exports = router;
