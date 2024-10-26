import React from 'react'
import { NavLink } from 'react-router-dom'
import nammQi from '../assets/nammQi.mp4';

function Login() {
  return (
    <div className='w-[100%] h-[100vh] flex justify-center items-center'>
    <form action="" className=' py-12 rgb lg:w-[40%] md:w-[60%]  w-full sm:mx-6 mx-4 max-sm:px-6 text-white p-8  rounded-lg  gap-6 relative animate-border-draw'>
        <NavLink to={'/'} className='text-2xl absolute top-6 '><i class="fa-solid fa-arrow-left"></i></NavLink>
        <h1 className='text-2xl text-center font-semibold'>Ro'yhatdan O'tish</h1>
            <div className='flex flex-col gap-6 '>
                <label>
                    <span>Ism</span><br />
                    <input type="text" className='mt-1 bg-white text-slate-800    w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                </label>
                <label>
                    <span>Familiya</span><br />
                    <input type="text" className='mt-1 bg-white text-slate-800    w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                </label>
                <label>
                    <span>Foydalanuvchi nomi</span><br />
                    <input type="text" className='mt-1 bg-white text-slate-800   w-full py-1 px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                </label>
            </div>

            
        <button className='w-full bg-white mt-6 py-1 text-slate-800 font-semibold'>Yuborish</button>
    </form>
    <video autoPlay muted className='object-cover h-full w-full absolute top-0 left-0 -z-10'>
        <source src={nammQi} />
    </video>
</div>
  )
}

export default Login
