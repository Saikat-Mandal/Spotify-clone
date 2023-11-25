import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import LoggedInContainer from '../containers/LoggedInContainer'
import { Howl } from 'howler';
import SongCard from "../components/SongCard"
import axios from 'axios'
function SinglePlaylistView() {
    const { playlistId } = useParams()
    const [soundPlayed, setSoundPlayed] = useState(null)
    const [playlistdetails, setPlaylistDetails] = useState({})
    const [songsData, setSongData] = useState([])

    // getting songs from backend for the user 
    useEffect(() => {
        const getPlaylistData = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/playlists/get/playlist/${playlistId}`, { withCredentials: true })
                console.log(response);
                setPlaylistDetails(response)
                setSongData(response.data.songs)
            } catch (error) {
                alert(error)
            }
        }
        getPlaylistData()
    }, [])

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






    return (
        <LoggedInContainer>

            <>


                (<>
                    {playlistdetails.data?._id && <> <p className=' px-4 py-5 font-bold text-white text-xl'>Playlist {playlistdetails.data.name}</p>
                        {
                            songsData.map((item, index) => {
                                return <SongCard key={index} id={item._id} img={item.thumbnail} name={item.name} artist={item.artist.firstName + " " + item.artist.lastName} duration="" playSound={playSound} track={item.track} />
                            })
                        }</>}

                </>
                )



            </>


        </LoggedInContainer>
    )
}

export default SinglePlaylistView