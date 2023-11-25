const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  likedSongs: {
    // we will change this to an array later
    type: String,
    default: "",
  },
  likedPlaylist: {
    // we will change this to an array later
    type: String,
    default: "",
  },
  subscribedArtists: {
    // we will change this to an array later
    type: String,
    default: "",
  },
});

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;
