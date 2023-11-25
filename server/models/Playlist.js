const mongoose = require("mongoose");

const playListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Types.ObjectId,
    ref: "user",
  },
  //   songs in playlist
  songs: [
    {
      type: mongoose.Types.ObjectId,
      ref: "songs",
    },
  ],
  collaborators: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
  // playlist collaborators
});

const PlaylistModel = mongoose.model("playlist", playListSchema);
module.exports = PlaylistModel;
