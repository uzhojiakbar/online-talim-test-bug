import React from 'react'
import ProfileNavbar from './Navbar/ProfileNavbar'
import cat from '../../assets/profileImg/cat.jpg'
import Footer from '../Footer/Footer'
import { getCookie } from '../../Hooks/getCooce'
import Leson from './lessons/Lesons'
function Profile() {
  return (
    <div className='text-white bg-slate-900 '>
      <ProfileNavbar />
      <div className=' mt-6 text-center pt-20'>
        <img src={cat} alt="user" className='w-[200px] h-[200px] object-cover rounded-full mix-blend-screen mx-auto border p-1' />
        <h1 className="text-[24px] font-semibold">Profilega xush kelibsiz Xurmatli foydalanuvchi</h1>
      </div>
      <h1 className=' ml-12 text-3xl mt-12'>Fanlar</h1>
      <Leson/>
      <Footer />
    </div>
  )
}

export default Profile
