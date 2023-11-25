/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useLayoutEffect, useRef } from 'react'
import Navbar from '../components/Navbar'
import ImageComponent from '../components/ImageComponent'
import SidebarComponent from '../components/SidebarComponent'
import { AiOutlineSearch, AiFillLike } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { BsPlusSquare, BsGlobe } from "react-icons/bs";
import Button from '../components/Button';
import { getUser } from '../utils/serverHelpers';
import { LuListMusic } from "react-icons/lu";
// import axios from 'axios';
import { Howl } from 'howler';
// import MediaPlayer from '../components/MediaPlayer';
import CreatePlaylistModal from "../components/modals/CreatePlaylistModal"
import songContext from '../contexts/songContext';
import { MdSkipPrevious, MdSkipNext, MdPlayCircle, MdPauseCircle, MdLoop, MdPlaylistAddCheck } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import AddToPlaylustModal from '../components/modals/AddToPlaylustModal';
import axios from 'axios';

function LoggedInContainer({ children }) {

  // songs data to map and show over home screen 
  // const [songsData, setSongData] = useState([])

  // songs played current state 

  // using the context to play a song 
  const { currentSong, soundPlayed, setSoundPlayed, isPaused, setIsPaused } = useContext(songContext)

  const [modalOpen, setModalOpen] = useState(false)
  const [addPlaylistModalOpen, setAddPlaylistModalOpen] = useState(false)
  const firstUpdate = useRef(true)

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    if (!currentSong) {
      return
    }
    // console.log("here");
    changeSong(currentSong.track)
  }, [currentSong && currentSong.track])

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

  // useEffect(() => {
  //   const getUserSongData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:4000/songs/get/mysongs", { withCredentials: true })
  //       // console.log(response.data);
  //       setSongData(response.data)
  //     } catch (error) {
  //       alert(error)
  //     }
  //   }
  //   getUserSongData()
  // }, [])


  // getting the user 
  const user = getUser()

  // add a song to playlist 

  const addSongToPlaylist = async (playlistId) => {
    const songId = currentSong.id
    const data = {
      playlistId,
      songId
    }
    try {
      const response = await axios.post("http://localhost:4000/playlists/add/song", data, { withCredentials: true })
      console.log(response);
      alert(`successfully added to ${response.data.name}`)
      setAddPlaylistModalOpen(false)
    } catch (error) {

    }
  }

  return (
    <div className='flex flex-col h-full w-full'>
      {modalOpen && <CreatePlaylistModal closeModal={() => setModalOpen(false)} />}
      {addPlaylistModalOpen && <AddToPlaylustModal closeModal={() => setAddPlaylistModalOpen(false)} addSongToPlaylist={addSongToPlaylist} />}
      <div className={currentSong != null ? 'flex h-9/10 w-full' : 'flex h-full w-full'}>
        <div className=' min-h-full w-1/5 bg-black p-3 flex flex-col '>
          <div className=' flex flex-col'>
            <div className="pb-5">
              <ImageComponent />
            </div>
            <div className='flex flex-col items-center bg-[#121212] rounded-lg'>
              <SidebarComponent />
              <SidebarComponent path="/search" text="Search" icon={<AiOutlineSearch />} />
              <SidebarComponent path="/library" text="Library" icon={<VscLibrary />} />
              {user != null && <SidebarComponent path="/mymusic" text="My music" icon={<LuListMusic />} />}
            </div>
            <div className='flex flex-col items-center bg-[#121212] rounded-lg mt-4'>
              <SidebarComponent onClick={() => setModalOpen(true)} text="Create playlist" icon={<BsPlusSquare />} />
              <SidebarComponent path="/likedsongs" text="Liked songs" icon={<AiFillLike />} />
            </div>
          </div>
          <div className=' w-1/2 mt-auto self-end'>
            <Button text="English" icon={<BsGlobe />} />
          </div>
        </div>
        {/* right part  */}
        <div className='overflow-hidden flex flex-col w-4/5 h-full bg-gradient-to-b from-[#1E1E1E] to-[#000000]'>
          <Navbar />
          {children}
        </div>
      </div>
      {/* seeker  */}
      {
        currentSong && (
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
            <div className=' w-1/4 flex justify-end text-2xl cursor-pointer'>
              <span onClick={() => setAddPlaylistModalOpen(true)} ><MdPlaylistAddCheck /></span>
            </div>
          </div>
        )
      }

    </div>
  )

}

export default LoggedInContainer