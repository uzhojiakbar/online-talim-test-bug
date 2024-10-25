import React, { useState } from 'react'
import Logo from '../assets/logo.webp'
import Register from '../register/register'
import { NavLink } from 'react-router-dom'
function Navbar() {
    const [navData, setNavda] = useState([
        {
            id: 1,
            name: 'Uy',
            path: '/'
        },
        {
            id: 2,
            name: 'Darslar',
            path: '/darslar',
            manzil: "#darslar"
        },
        {
            id: 3,
            name: 'Tanlovim',
            path: '/Tanlovim'
        },
        {
            id: 4,
            name: 'Blog',
            path: '/Blog'
        },
    ])

    const [openForm, setOpenForm] = useState(false)

    return (
        <div data-aos="filip-left" className=' text-white bg-[#283036] flex py-3 lg:px-16 justify-between items-center'>
            <h1 className='text-4xl'>Att</h1>
            <div className='flex gap-6'>
                {navData.map((item) => (
                    <div className='cursor-pointer px-8 py-1' key={item.id}>
                        <a href={item.manzil}>{item.name}</a>
                    </div>
                ))}
            </div>
            <div className='flex gap-6 items-center'>
                <button>Kirish</button>
                <NavLink to={'/register'} onClick={()=>setOpenForm(true)} className='bg-[#FF6E30] px-6 py-1 rounded-sm hover:bg-[#da6735] transition-all'>Registratsiya</NavLink>
            </div>
        </div>
    )
}

export default Navbar
