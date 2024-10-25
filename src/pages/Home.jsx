import React from 'react'
import Headers from '../componets/Headers'
import Navbar from '../componets/Navbar'
import Homesection1 from '../componets/Homesection1'
import Corusel from '../componets/Corusel'
import Footer from '../componets/Footer'
function Home() {
  return (
    <div>
      <Navbar/>
      <Headers/>
      <Homesection1/>
      <Corusel/>
      <Footer/>
    </div>
  )
}

export default Home
