import React from 'react'
import ProfileNavbar from './Navbar/ProfileNavbar'
import cat from '../../assets/profileImg/cat.jpg'
import Footer from '../Footer/Footer'
function Profile() {
  return (
    <div className='text-white bg-slate-900 '>
      <ProfileNavbar />
      <div className=' mt-6 text-center pt-20'>
        <img src={cat} alt="user" className='w-[200px] h-[200px] object-cover rounded-full mix-blend-screen mx-auto border p-1' />
        <h1 className='text-xl'>Rahmadjon Abdullayev</h1>
        <p>36-Att-gurux talabasi</p>
      </div>
      <Footer />
    </div>  
  )
}

export default Profile
