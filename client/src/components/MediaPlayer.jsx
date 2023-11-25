import React, { useContext, useEffect, useState } from 'react'
import { MdSkipPrevious, MdSkipNext, MdPlayCircle, MdPauseCircle, MdLoop } from "react-icons/md";
import { Howl, Howler } from 'howler';
import { BiShuffle } from "react-icons/bi";
import songContext from '../contexts/songContext';
function MediaPlayer() {
  // songs played current state 
  const [soundPlayed, setSoundPlayed] = useState(null)
  const [isPaused, setIsPaused] = useState(true)

  // using the context to play a song 
  const { currentSong, setCurrentSong } = useContext(songContext)


  useEffect(() => {
    if (!currentSong) {
      return
    }
    changeSong(currentSong.track)
  }, [currentSong])

  // playing sound function 
  const playSound = () => {
    if (!soundPlayed) {
      return
    }
    soundPlayed.play()
  }

  // pausing a song function 
  const pauseSound = (songSrc) => {
    soundPlayed.pause()
  }

  // changing a song function 
  const changeSong = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop()
    }

    let sound = new Howl({
      src: [songSrc],
      html5: true
    });

    setSoundPlayed(sound)
    sound.play()
    setIsPaused(false)
  }


  // toggle play pause 
  const togglePlayPause = () => {
    if (isPaused) {
      playSound()
      setIsPaused(false)
    }
    else {
      pauseSound()
      setIsPaused(true)
    }
  }

  return (
    <div className=' h-1/10 w-full bg-black flex justify-between items-center px-4 text-white'>
      <div className=' flex items-center gap-x-4 w-1/4'>
        <img className='rounded-md h-12 w-12' src={currentSong.img} alt='' />
        <div>
          <h1 className='hover:underline cursor-pointer '>{currentSong.name}</h1>
          <p className=' hover:underline cursor-pointer bg-cover bg-center text-sm'> {currentSong.artist}</p>
        </div>
      </div>
      <div className='h-full w-1/6 flex flex-col items-center justify-center'>
        <div className=' flex items-center justify-between w-full cursor-pointer'>
          {/* controls  */}
          <BiShuffle className=' text-xl font-semibold' />
          <MdSkipPrevious className=' text-2xl font-semibold' />
          {
            isPaused ? (<span onClick={togglePlayPause}><MdPauseCircle className='text-5xl hover:scale-105' /></span>) : (<span onClick={togglePlayPause}><MdPlayCircle className='text-5xl hover:scale-105' /></span>)
          }

          <MdSkipNext className=' text-2xl font-semibold' />
          <MdLoop className=' text-xl font-semibold' />

        </div>
        <div>
          {/* seek  */}
        </div>
      </div>
      <div className=' w-1/4 flex justify-center'>
        last area
      </div>
    </div>
  )
}

export default MediaPlayer