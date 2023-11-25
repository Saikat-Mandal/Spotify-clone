import React, { useContext, useEffect, useState } from 'react'
import SongCard from '../components/SongCard';
import axios from 'axios';
import { Howl } from 'howler';
import LoggedInContainer from '../containers/LoggedInContainer';
import songContext from '../contexts/songContext';


function MySongs() {

  const [songsData, setSongData] = useState([])

  const [soundPlayed, setSoundPlayed] = useState(null)



  // playing a song function 
  const playSound = (songSrc) => {
    if (soundPlayed) {
      soundPlayed.stop()
    }

    let sound = new Howl({
      src: [songSrc],
      html5: true
    });

    setSoundPlayed(sound)
    // console.log(sound);
    sound.play()
  }

  // getting songs from backend for the user 
  useEffect(() => {
    const getUserSongData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/songs/get/mysongs", { withCredentials: true })
        // console.log(response.data);
        setSongData(response.data)
      } catch (error) {
        alert(error)
      }
    }
    getUserSongData()
  }, [])




  return (
    <LoggedInContainer>
      <div className=' overflow-y-auto p-2'>
        <div className=''>
          <p className=' px-4 py-2 font-bold text-white text-xl'>My songs</p>
          {
            songsData.map((item, index) => {
              return <SongCard key={index} id={item._id} img={item.thumbnail} name={item.name} artist={item.artist.firstName + " " + item.artist.lastName} duration="" playSound={playSound} track={item.track} />
            })
          }
        </div>
      </div>
    </LoggedInContainer>
  )
}

// function MySongs() {

// const [songsData , setSongData] = useState([])

// const [soundPlayed  ,setSoundPlayed] = useState(null)



// // playing a song function 
// const playSound = (songSrc) =>{
//   if(soundPlayed) {
//     soundPlayed.stop()
//   }

//   let sound = new Howl({
//     src: [songSrc],
//     html5: true
//   });

//   setSoundPlayed(sound)
//   // console.log(sound);
//   sound.play()
// }




// useEffect(()=>{
//     const getUserSongData = async() =>{
//        try {
//         const response = await axios.get("http://localhost:4000/songs/get/mysongs" , {withCredentials:true})
//         // console.log(response.data);
//         setSongData(response.data)
//        } catch (error) {
//         alert(error)
//        }
//     }
//     getUserSongData()
// } , [])

// const user = getUser()
//     return (
//       <div className='flex flex-col h-full w-full'>
//         <div className='flex h-9/10 w-full'>
//           <div className=' min-h-full w-1/5 bg-black p-3 flex flex-col '>
//             <div className=' flex flex-col'>
//               <div className="pb-5">
//               <ImageComponent />
//               </div>
//               <div className='flex flex-col items-center bg-[#121212] rounded-lg'>
//                 <SidebarComponent  />
//                 <SidebarComponent path="/search" text="Search" icon={<AiOutlineSearch/>}/> 
//                 <SidebarComponent path="/library" text="Library" icon={<VscLibrary/>}/> 
//                 {user !== null &&   <SidebarComponent path="/mymusic" text="My music" icon={<LuListMusic/>}/> }
//               </div>          
//               <div className='flex flex-col items-center bg-[#121212] rounded-lg mt-4'>
//                 <SidebarComponent path="/createplaylist" text="Create playlist" icon={<BsPlusSquare/>} />
//                 <SidebarComponent path="/likedsongs" text="Liked songs" icon={<AiFillLike/>}/> 
//               </div>
//             </div>
//             <div className=' w-1/2 mt-auto self-end'>
//             <Button text="English" icon={<BsGlobe/>}/>
//             </div>
//           </div>
//           <div className='overflow-hidden flex flex-col w-4/5 h-full bg-gradient-to-b from-[#1E1E1E] to-[#000000]'>
//             <Navbar/>
//             <div className=' overflow-y-auto p-2'>
//                 <div className=''>
//                     <p className=' px-4 py-2 font-bold text-white text-xl'>My songs</p>
//                    {
//                     songsData.map((item , index)=>{
//                         return <SongCard key={index} img={item.thumbnail} name={item.name} artist={item.artist.firstName +" " +item.artist.lastName} duration="" playSound={playSound} track={item.track}/>
//                     })
//                    }
//                 </div>
//             </div>
//           </div>
//         </div>
//         <MediaPlayer/>
//         </div>
//       )

// }

export default MySongs