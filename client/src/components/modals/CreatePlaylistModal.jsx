import React, { useState } from 'react'
import Inputfield from "../Inputfield"
import axios from "axios"
function CreatePlaylistModal(props) {
    const [playlistName, setPlayListName] = useState("")
    const [thumbnail, setThumbnail] = useState("")

    const onGetPlaylist = async (e) => {
        e.preventDefault()
        const data = {
            name: playlistName,
            thumbnail: thumbnail,
            songs: []
        }
        try {
            const response = await axios.post("http://localhost:4000/playlists/create",
                data,
                { withCredentials: true }
            )

            console.log(response);
            if (response.data._id) {
                props.closeModal()
            }
            alert("Playlist created succesfully !")
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div onClick={props.closeModal} className=' absolute bg-black bg-opacity-50 text-white w-screen h-screen flex items-center justify-center'>
            <div className=' bg-[#1A1A1A] w-1/3 rounded-md p-3 flex flex-col items-center' onClick={(e) => e.stopPropagation()}>
                <h1 className='pb-6 text-lg font-extrabold'>Create a new Playlist</h1>
                <Inputfield value={playlistName} label="Name" placeholder="Playlist name" setValue={setPlayListName} />
                <Inputfield value={thumbnail} label="Thumbnail" placeholder="Thumbnail" setValue={setThumbnail} />
                <button type='submit' onClick={onGetPlaylist} className=' px-3 py-1 bg-green-500 text-black rounded-full hover:scale-105'>Create</button>
            </div>
        </div>
    )
}

export default CreatePlaylistModal