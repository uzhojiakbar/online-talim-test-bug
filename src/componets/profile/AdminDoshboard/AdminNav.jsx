import React, { useState } from 'react'
import { delCookie } from '../../../Hooks/getCooce';
import { useNavigate, useParams } from 'react-router-dom';
import { Dropdown } from 'antd';
function AdminNav() {
    const name = JSON.parse(localStorage.getItem('myArray'))
    const [open, setOpen] = useState(false)

    const nav = useNavigate();
    const delestate = () => {
        delCookie('token')
        nav('/')
        document.location.reload()
    }

    const menu = (
        <div className='p-2 rounded-lg mt-2 bg-slate-white shadow-lg bg-white'>
            <span onClick={delestate} className='flex items-center gap-2 justify-center hover:bg-slate-100 p-2 rounded-sm'>
                <h1 className='cursor-pointer'>chiqish</h1>
                <i class="fa-solid fa-right-from-bracket"></i>
            </span>
        </div>
    )

    return (
        <div className=' max-w-[1920px] w-full max-md:pl-16 bg-white z-[2000] py-2 px-8 flex  justify-between fixed items-center border-b'>
            <h1 onClick={()=>nav('/')} className="cursor-pointer text max-sm:text-[14px] sm:text-xxl text-xl font-bold">Administrator</h1>
            <Dropdown overlay={menu}>
                <div className='flex gap-2 max-sm:text-[14px] sm:text-xl text-xl font-bold text-slate-800 items-center'>
                    <p >{name?.firstname}</p>
                    <img onClick={() => setOpen(!open)} className='sm:w-12 w-12' src="data:image/png;base64,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" alt="" />
                </div>
            </Dropdown>
        </div>
    )
}

export default AdminNav
