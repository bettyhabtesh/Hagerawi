import React from 'react'
import Filters from '../Components/Filters'
import NavBar from '../Components/NavBar'
import Card from '../Components/TopCard'
import TrendingGallery from '../Components/Trending'
import NewlyReleasedCards from '../Components/NewlyReleased'
import SimilarArtists from '../Components/SimilarArtists'
import SimilarArts from '../Components/SimilatArts'
import Footer from '../Components/Footer'
const Landing = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#664A66] via-[#342B34] to-[#121212]" >  
      <NavBar/>
      <Filters/>
      <Card/>
    </div>
    <div className='bg-[#121212]'>
     <TrendingGallery/>
     <NewlyReleasedCards/>
     <SimilarArtists />
     <SimilarArts/>
     <Footer/>
     </div>
    </>
  )
}

export default Landing
