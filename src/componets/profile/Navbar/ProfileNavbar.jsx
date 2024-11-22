import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { delCookie } from '../../../Hooks/getCooce';

function ProfileNavbar() {
    const [open, setOpen] = useState(false)

    const nav = useNavigate();
    const delestate = () => {
        delCookie('token')
        nav('/')
        document.location.reload()
    }
    return (
        <div className=' bg-slate-800 border-b border-slate-500 py-3 px-12 text-white flex justify-between items-center fixed w-full top-0 z-50'>
            <h1 className='font-semibold text-xl max-md:ml-12'>Onlie dasrlik</h1>
            <div className=' bg-slate-400 w-12 h-12 text-2xl flex items-center justify-center rounded-full relative cursor-pointer' >
                <span onClick={() => setOpen(!open)}><i className="fa-solid fa-user"></i></span>
                {open && <div onClick={delestate} className="bg-white py-3 px-6 text-slate-800 absolute top-16 -right-6 text-[16px] flex items-center gap-6 rounded-lg">
                    <h1>chiqish</h1>
                    <i class="fa-solid fa-right-from-bracket"></i>
                </div>}
            </div>

        </div>
    )
}

export default ProfileNavbar
