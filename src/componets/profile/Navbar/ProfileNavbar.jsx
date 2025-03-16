import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { delCookie } from '../../../Hooks/getCooce';
import { Dropdown } from 'antd';

function ProfileNavbar() {
    const [open, setOpen] = useState(false)
    const nav = useNavigate();
    const delestate = () => {
        delCookie('token')
        nav('/')
        document.location.reload()
    }
    const menu = (
        <div className='p-2 rounded-lg mt-3 bg-slate-white shadow-lg bg-white'>
            <span onClick={delestate} className='cursor-pointer flex items-center gap-2 hover:bg-slate-100 rounded-sm p-2 '>
                <h1>chiqish</h1>
                <i className="fa-solid fa-right-from-bracket"></i>
            </span>
        </div>
    )

    return (
        <div className='max-w-[1920px] w-full bg-slate-800 border-b border-slate-500 py-3 px-12 text-white flex justify-between items-center fixed top-0 z-[1000]'>
            <h1 onClick={() => nav('/')} className='cursor-pointer font-semibold text-xl max-md:ml-12'>Onlie dasrlik</h1>
            <Dropdown overlay={menu}>
                <div className=' bg-slate-400 w-12 h-12 text-2xl flex items-center justify-center rounded-full relative cursor-pointer' >
                    <span onClick={() => setOpen(!open)}><i className="fa-solid fa-user"></i></span>
                </div>
            </Dropdown>
        </div>
    )
}

export default ProfileNavbar
