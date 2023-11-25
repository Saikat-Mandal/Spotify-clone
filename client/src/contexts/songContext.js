import { createContext } from "react";

// current songs in global context
const songContext = createContext({
  currentSong: null,
  setCurrentSong: (currentSong) => {},
  soundPlayed :null, 
  setSoundPlayed :() => {},
  isPaused:null, 
  setIsPaused :() => {},
});

export default songContext;
