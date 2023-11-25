import React, { useEffect, useState } from 'react'
import { getUser } from '../../utils/serverHelpers'
import axios from 'axios'

function AddToPlaylustModal(props) {

    const [playlistData, setPlaylistData] = useState([])
    const user = getUser()
    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/playlists/get/${user}`)
                setPlaylistData(response.data)
                console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        if (user) {
            getPlaylistData()
        }

    }, [])


    return (
        <div onClick={props.closeModal} className=' absolute bg-black bg-opacity-50 text-white w-screen h-screen flex items-center justify-center'>
            <div className=' bg-[#1A1A1A] w-1/3 rounded-lg p-6 flex flex-col' onClick={(e) => e.stopPropagation()}>
                <div className=''>
                    <p className=' text-xl py-4'>Select playlist</p>
                    {
                        playlistData.map((item, index) => {
                            return <PlaylistComponent key={index} id={item._id} img={item.thumbnail} name={item.name} addSongToPlaylist={props.addSongToPlaylist} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

const PlaylistComponent = (props) => {
    return (

        <div onClick={() => props.addSongToPlaylist(props.id)} className=' flex items-center gap-x-4 cursor-pointer hover:bg-[#151515] p-1 px-4 rounded-md'>
            <img className='rounded-md h-12 w-12 my-4 r' src={props.img} alt='' />
            <div>
                <h1 className=' hover:underline '>{props.name}</h1>
            </div>
        </div>

    )
}

export default AddToPlaylustModal