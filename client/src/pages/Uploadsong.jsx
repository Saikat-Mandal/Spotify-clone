import React, { useState } from 'react'
import Inputfield from '../components/Inputfield';
import CloudinaryUpload from '../components/CloudinaryUpload';
import axios from 'axios';
import LoggedInContainer from '../containers/LoggedInContainer';


function Uploadsong(){
  const [name , setName] = useState("")
  const [thumbnail , setThumbnail] = useState("")
  const [playListurl , setPlaylistUrl] = useState("")
  const [uploadedSongFileName , setUploadedSongFileName] = useState("")


  const onSubmitSong = async () =>{
    const data = {
      name : name,
      thumbnail : thumbnail,
      track:playListurl
    }
    const response = await axios.post("http://localhost:4000/songs/create" , data , {withCredentials:true})
    console.log(response);
    alert("songs submitted successfully !")
  }

  return (
    <LoggedInContainer>
          <div className=' text-white p-4'>
                <p className=' text-xl font-extrabold'>Upload your music</p>
                <div className=' flex gap-x-6 w-2/3 mt-6'>
 
                    <Inputfield setValue={setName} value={name} label="Name" placeholder="Name"/>
                    <Inputfield setValue={setThumbnail} value={thumbnail} label="Thumbnail" placeholder="Thumbnail"/>
                </div>
                <div className=' flex gap-x-4'>
                {
                  uploadedSongFileName ? (<p className=' border-dashed border-white border inline p-2 rounded-md'>{uploadedSongFileName.substring(0,10)}</p>) : (<CloudinaryUpload setUrl={setPlaylistUrl} setSongFileName={setUploadedSongFileName} />)
                }
             <button onClick={onSubmitSong} className=' px-3 py-2 bg-white text-black rounded-full' >Submit song</button>
                </div>
            </div>
    </LoggedInContainer>
  )
}

// function Uploadsong() {

//   const [name , setName] = useState("")
//   const [thumbnail , setThumbnail] = useState("")
//   const [playListurl , setPlaylistUrl] = useState("")
//   const [uploadedSongFileName , setUploadedSongFileName] = useState("")


//   const onSubmitSong = async () =>{
//     const data = {
//       name : name,
//       thumbnail : thumbnail,
//       track:playListurl
//     }
//     const response = await axios.post("http://localhost:4000/songs/create" , data , {withCredentials:true})
//     console.log(response);
//     alert("songs submitted successfully !")
//   }

//     const user = getUser()



//     return (
//       <div className='flex flex-col h-full w-full'>
//         <div className='flex h-full w-full'>
//           <div className='  w-1/5 bg-black p-3 flex flex-col '>
//             <div className=' flex flex-col'>
//               <div className="pb-5">
//               <ImageComponent />
    
//               </div>
//               <div className='flex flex-col items-center bg-[#121212] rounded-lg'>
//                 <SidebarComponent />
//                 <SidebarComponent path="/search" text="Search" icon={<AiOutlineSearch/>}/> 
//                 <SidebarComponent path="/library" text="Library" icon={<VscLibrary/>}/> 
//                 {user &&   <SidebarComponent text="My music" icon={<LuListMusic/>}/> }
//               </div>          
//               <div className='flex flex-col items-center bg-[#121212] rounded-lg mt-4'>
//                 <SidebarComponent path="/createplaylist" text="Create playlist" icon={<BsPlusSquare/>} />
//                 <SidebarComponent path="/likedsongs" text="Liked songs" icon={<AiFillLike/>}/> 
//               </div>
//             </div>
//             <div className=' w-1/2 mt-auto self-end'>
//             </div>
//             <Button text="English" icon={<BsGlobe/>}/>
//           </div>
//           <div className='overflow-auto w-4/5 h-full bg-gradient-to-b from-[#1E1E1E] to-[#000000]'>
//             <Navbar/>
//             <div className=' text-white p-4'>
//                 <p className=' text-xl font-extrabold'>Upload your music</p>
//                 <div className=' flex gap-x-6 w-2/3 mt-6'>
 
//                     <Inputfield setValue={setName} value={name} label="Name" placeholder="Name"/>
//                     <Inputfield setValue={setThumbnail} value={thumbnail} label="Thumbnail" placeholder="Thumbnail"/>
//                 </div>
//                 <div className=' flex gap-x-4'>
//                 {
//                   uploadedSongFileName ? (<p className=' border-dashed border-white border inline p-2 rounded-md'>{uploadedSongFileName.substring(0,10)}</p>) : (<CloudinaryUpload setUrl={setPlaylistUrl} setSongFileName={setUploadedSongFileName} />)
//                 }
//              <button onClick={onSubmitSong} className=' px-3 py-2 bg-white text-black rounded-full' >Submit song</button>
//                 </div>
//             </div>
//           </div>
//         </div>

//         </div>
         
//       )
// }

export default Uploadsong