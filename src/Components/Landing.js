import React from 'react'
import Filters from './Filters'
import NavBar from './NavBar'
import Card from './Card'
const Landing = () => {
  return (
    <div className="bg-gradient-to-b from-[#664A66] via-[#342B34] to-[#121212]" >  
      <NavBar/>
      <Filters/>
      <Card/>
    </div>
  )
}

export default Landing
