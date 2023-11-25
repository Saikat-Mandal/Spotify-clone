import React, { useContext } from 'react'
import songContext from '../contexts/songContext'

function SongCard(props) {

  const { currentSong, setCurrentSong } = useContext(songContext)

  // console.log(props);
  return (
    <div className='my-1 flex text-white justify-between gap-x-4 p-4 hover:bg-[#252425] rounded-md cursor-pointer' onClick={() => setCurrentSong(props)}>
      <div className=' flex items-center gap-x-4'>
        {/* <div className=' h-12 w-12' style={{background:`url("${props.img}")`}}> </div> */}
        <img className='rounded-md h-12 w-12' src={props.img} alt='' />
        <div>
          <h1 className=' hover:underline '>{props.name}</h1>
          <p className='  hover:underline bg-cover bg-center text-sm'> {props.artist}</p>
        </div>
      </div>
      <div className='flex items-center'>
        {props.duration}
      </div>
    </div>
  )
}
SongCard.defaultProps = {
  img: "https://images.unsplash.com/photo-1565476599063-a9b93037c7f0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGdyYWZmaXRpfGVufDB8fDB8fHww",
  name: "Teddys spots",
  artist: "Ed sheeran",
  duration: "3:44"
}


export default SongCard