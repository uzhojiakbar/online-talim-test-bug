import React from 'react'
import Headers from '../componets/Headers/Headers'
import Navbar from '../componets/Navbar/Navbar'
import Homesection1 from '../componets/HomeSection/Homesection1'
import Footer from '../componets/Footer/Footer'
function Home() {
  return (
    <div>
      <Navbar/>
      <Headers/>
       {/* <Homesection1/> */}
      <Footer/> 
    </div>
  )
}

export default Home
