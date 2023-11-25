import React from 'react'
import Playlist from '../components/Playlist';
import LoggedInContainer from '../containers/LoggedInContainer';


 // data for focus cards 
 const focusCardsData = [
  {
      image :"https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Peaceful piano",
      description:"Relax with beautiful piano pieces"
  },
  {
      image:"https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Deep focus",
      description:"Keep calm and focus with music",
  },
  {
      image:"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Instrumental study",
      description:"Focus with soft music in the background"
  },
  {
      image:"https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Focus flow",
      description:"Up tempo hip hop instrumental beats",
  },
  {
      image:"https://plus.unsplash.com/premium_photo-1664382465693-d5b7c22130a1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvY3VzfGVufDB8fDB8fHww",
      title:"Beats to think to",
      description:"Focus with deep techno and tech house",
  },
]
// data for night cards 
const chillBeats = [
  {
      image :"https://images.unsplash.com/photo-1630713815150-2c847025c1d9?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Peaceful piano",
      description:"Relax with beautiful piano pieces"
  },
  {
      image:"https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bG9maXxlbnwwfHwwfHx8MA%3D%3D",
      title:"Deep focus",
      description:"Keep calm and focus with music",
  },
  {
      image:"https://images.unsplash.com/photo-1547097409-cb36e2f07df8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9maXxlbnwwfHwwfHx8MA%3D%3D",
      title:"Instrumental study",
      description:"Focus with soft music in the background"
  },
  {
      image:"https://images.unsplash.com/photo-1602619075038-a369b1b558a0?auto=format&fit=crop&q=80&w=1932&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Focus flow",
      description:"Up tempo hip hop instrumental beats",
  },
  {
      image:"https://images.unsplash.com/photo-1573854612793-9a3e6ebc61fc?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGxvZml8ZW58MHx8MHx8fDA%3D",
      title:"Beats to think to",
      description:"Focus with deep techno and tech house",
  },
]

// data for sounds of pune
const pune = [
  {
      image :"https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Peaceful piano",
      description:"Relax with beautiful piano pieces"
  },
  {
      image:"https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Deep focus",
      description:"Keep calm and focus with music",
  },
  {
      image:"https://images.unsplash.com/photo-1525201548942-d8732f6617a0?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Instrumental study",
      description:"Focus with soft music in the background"
  },
  {
      image:"https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title:"Focus flow",
      description:"Up tempo hip hop instrumental beats",
  },
  {
      image:"https://plus.unsplash.com/premium_photo-1664382465693-d5b7c22130a1?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvY3VzfGVufDB8fDB8fHww",
      title:"Beats to think to",
      description:"Focus with deep techno and tech house",
  },
]
function Home(){
 
  return (<LoggedInContainer>
       <div className=' overflow-y-auto'>
                < Playlist title="Focus" cardsData={focusCardsData} />
                < Playlist title="Night owl" cardsData={chillBeats}/>
                < Playlist tile="Sound of Pune" cardsData={pune} />
        </div>
  </LoggedInContainer>)
}

export default Home