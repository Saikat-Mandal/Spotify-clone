import React, { useEffect, useState } from 'react'
import LoggedInContainer from "../containers/LoggedInContainer"
import SongCard from '../components/SongCard'
import axios from 'axios'
import { getUser } from '../utils/serverHelpers'
import { useNavigate } from 'react-router-dom'
function Library() {
    const [playlistData, setPlaylistData] = useState([])
    const user = getUser()
    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/playlists/get/${user}`)
                setPlaylistData(response.data)
                // console.log(response);
            } catch (error) {
                console.log(error);
            }
        }

        if (user) {
            getPlaylistData()
        }

    }, [])

    const navigate = useNavigate()
    const getTheSelectedPlaylist = (playlistId) => {
        navigate(`/playlist/${playlistId}`)
    }


    return (
        <LoggedInContainer>

            <div className=' overflow-y-auto p-2'>
                <div className=''>
                    <p className=' px-4 py-5 font-bold text-white text-xl'>My playlists</p>
                    <div className=' flex gap-x-6'>
                        {
                            playlistData.map((item, index) => {
                                return <Card getTheSelectedPlaylist={getTheSelectedPlaylist} id={item._id} key={index} image={item.thumbnail} title={item.name} description="" />
                            })
                        }
                    </div>
                </div>
            </div>

        </LoggedInContainer>

    )
}



// card component 
function Card(props) {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/playlist/${props.id}`)} className='p-4 w-1/6 bg-gradient-to-b text-white from-[#1E1E1E] to-[#000000] rounded-2xl cursor-pointer'>

            <img src={props.image} alt="img" className='w-full rounded-2xl' />

            <div>
                <p className='pb-1 pt-3 font-bold text-lg'>{props.title}</p>
                <p className='text-sm text-gray-400 pb-3'>{props.description}</p>
            </div>
        </div>
    )
}
Card.defaultProps = {
    image: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Todays top hits",
    description: "Drake's top hits"
}


export default Library