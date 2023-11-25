function Playlist({title , cardsData}){
    return (
      <div className='text-white p-4'>
        <p className='text-2xl pb-4 font-bold'>{title}</p>
        <div className=' flex justify-between'>
            {
                cardsData.map((item , index)=>{
                    return <Card key={index} image={item.image} title={item.title} description={item.description} />
                })
            }
  
        </div>
      </div>
    )
  }
  Playlist.defaultProps ={
    title :"Good evening"
  }
  

  // card component 
  function Card(props){
    return(
      <div className='p-4 w-1/6 bg-gradient-to-b from-[#1E1E1E] to-[#000000] rounded-2xl cursor-pointer'>
  
         <img src={props.image} alt="img" className='w-full rounded-2xl' />
  
        <div>
          <p className='pb-1 pt-3 font-bold text-lg'>{props.title}</p>
          <p className='text-sm text-gray-400 pb-3'>{props.description}</p>
        </div>
      </div>
    )
  }
  Card.defaultProps ={
    image:"https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title : "Todays top hits",
    description : "Drake's top hits"
  }

  export default Playlist