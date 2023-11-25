const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const UserModel = require("./models/User.js");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const userRouter = require("./routes/users.js");
const songsRouter = require("./routes/songs.js");
const playlistRouter = require("./routes/playlists.js");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// connect to mongoDb
mongoose
  .connect("mongodb://0.0.0.0:27017/spotifyDb", {})
  .then(() => console.log("successfully connected to database"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

// routes
app.use("/auth", userRouter);
app.use("/songs", songsRouter);
app.use("/playlists", playlistRouter);

// app listen
app.listen(process.env.PORT, () =>
  console.log(`listning to port ${process.env.PORT}`)
);
