const express = require("express");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");
const PlaylistModel = require("../models/Playlist");
const SongModel = require("../models/Song");
const { json } = require("body-parser");
const router = express.Router();

// create a playlist
router.post("/create", async (req, res) => {
  const token = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const user = await UserModel.findById(token.id);
  const { name, thumbnail, songs } = req.body;
  if (!name || !thumbnail || !songs)
    return res.status(301).json({ message: "all data required" });
  const playlistDetail = {
    name: name,
    thumbnail: thumbnail,
    owner: user._id,
    songs: songs,
    collaborators: [],
  };

  const playlist = await PlaylistModel.create(playlistDetail);

  res.status(200).json(playlist);
});

// get a playlist by id
router.get("/get/playlist/:playlistId", async (req, res) => {
  const playlistId = req.params.playlistId;

  const playlist = await PlaylistModel.findOne({ _id: playlistId }).populate({path: "songs" , populate :{
    path:"artist"
  }});

  if (!playlist) return res.status(301).json({ message: "invalid ID" });

  res.status(200).json(playlist);
});

// get all playlists made by an artist
router.get("/get/artist/:artistId", async (req, res) => {
  const artistId = req.params.artistId;
  const artist = await UserModel.findOne({ _id: artistId });
  if (!artist) return res.status(301).json({ message: "no such artist exits" });
  const playlists = await PlaylistModel.find({ owner: artistId });
  if (!playlists)
    return res.status(301).json({ message: "no playlists found !" });
  res.status(200).json(playlists);
});

// add song to playlist
router.post("/add/song", async (req, res) => {
  const token = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
  const user = await UserModel.findById(token.id);
  const { playlistId, songId } = req.body;
  const playlist = await PlaylistModel.findOne({ _id: playlistId });
  if (!playlist) return res.json({ message: "playlist not found" });

  if (
    !playlist.owner.equals(user._id) &&
    !playlist.collaborators.includes(user._id)
  ) {
    return res
      .status(301)
      .json({ message: "songs cannot be added due to authority not granted" });
  }
  const song = await SongModel.findOne({ _id: songId });
  if (!song) return res.status(301).json({ message: "songs does not exits" });

  playlist.songs.push(songId);
  await playlist.save();

  res.status(200).json(playlist);
});


// get all playlist of me 
router.get("/get/:me" , async(req,res)=>{
  const artistId = req.params.me
  const artist = await UserModel.find({_id : artistId})
  if(!artist){
    return res.status(301).json({message : "No user found"})
  }

  const playlists = await PlaylistModel.find({owner : artistId})
  if (!playlists)
    return res.status(301).json({ message: "no playlists found !" });
  res.status(200).json(playlists);
})
module.exports = router;
