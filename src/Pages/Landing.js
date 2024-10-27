import React from 'react'
import Filters from '../Components/Filters'
import NavBar from '../Components/NavBar'
import Card from '../Components/TopCard'
import TrendingGallery from '../Components/Trending'
const Landing = () => {
  return (
    <>
    <div className="bg-gradient-to-b from-[#664A66] via-[#342B34] to-[#121212]" >  
      <NavBar/>
      <Filters/>
      <Card/>
    </div>
     <TrendingGallery/>
    </>
  )
}

export default Landing
