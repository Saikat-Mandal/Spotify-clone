import React, { useState } from 'react'
import LoggedInContainer from '../containers/LoggedInContainer'
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { Howl } from 'howler';
import SongCard from '../components/SongCard';
function Search() {
    const [isFocused, setIsfocused] = useState(false)
    const [searchText, setSearchText] = useState("")
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


    // this function will call the search api 
    const searchSong = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/songs/get/songname/${searchText}`)
            setSongData(response.data)
            // console.log(response);
            setSearchText("")
        } catch (error) {
            alert(error)
        }

    }


    return (
        <LoggedInContainer>
            <div className=' w-full p-6 text-white '>
                <div onFocus={() => setIsfocused(true)} onBlur={() => setIsfocused(false)} className={`w-1/3 bg-[#242424] text-sm py-3 px-4 outline-white rounded-full flex items-center gap-x-3 ${isFocused ? "border border-white" : ""}`}>
                    <AiOutlineSearch className=' text-2xl' />
                    <input onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            searchSong()
                        }
                    }} value={searchText} onChange={(e) => setSearchText(e.target.value)} type="text" placeholder='What do you want to listen to ?' className=' w-full bg-transparent outline-none h-full' />
                </div>
                <div className=' overflow-y-auto p-2'>
                    {
                        songsData.length > 0 ? (<div className=''>
                            {/* <p className=' px-4 py-2 font-bold text-white text-xl'>My songs</p> */}
                            <p className='py-3 text-gray-300 font-extrabold'>Showing search results for {searchText}</p>
                            {
                                songsData.map((item, index) => {
                                    return <SongCard key={index} img={item.thumbnail} name={item.name} artist={item.artist.firstName + " " + item.artist.lastName} duration="" playSound={playSound} track={item.track} />
                                })
                            }
                        </div>) : (<p className='py-3 text-gray-300'>Nothing to show here...</p>)
                    }
                </div>
            </div>
        </LoggedInContainer>
    )
}

export default Search