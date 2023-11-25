import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { getUser } from "./utils/serverHelpers";
import Profile from "./pages/Profile";
import Uploadsong from "./pages/Uploadsong";
import MySongs from "./pages/MySongs";
import songContext from "./contexts/songContext";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Search from "./pages/Search";
import Library from "./pages/Library";
import SinglePlaylistView from "./pages/SinglePlaylistView";
function App() {
  const user = getUser();

  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null)
  const [isPaused, setIsPaused] = useState(true)
  return (
    <div className="h-screen w-screen ">
      <BrowserRouter>
     
      {/* logged in routes  */}
      {user !== null ? (
        <songContext.Provider value={{ currentSong, setCurrentSong , soundPlayed , setSoundPlayed , isPaused , setIsPaused }}>
          <Routes>
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search/>} />
            <Route path="/library" element={<Library/>} />
            <Route path="/playlist/:playlistId" element={<SinglePlaylistView />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uploadsong" element={<Uploadsong />} />
            <Route path="/mymusic" element={<MySongs />} />
          </Routes>
        </songContext.Provider>
      ) : (
        // logged out routes
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      )}
       </BrowserRouter>
    </div>
  );
}

export default App;
