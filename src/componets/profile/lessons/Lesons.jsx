import React from 'react'
import { LessonData } from '../../../utils/LesnosData'
import { NavLink } from 'react-router-dom'
import { useRes } from '../../Context/useContext'
function Leson() {
    const { res, setRes } = useRes();
    return (
        <div className=' px-12  mt-6 grid lg:grid-cols-3 gap-8 sm:grid-cols-3 grid-cols-1'>
            {LessonData.map((v) => (
                <div key={v.id} className='space-y-5 bg-slate-800 p-8 rounded-lg'>
                    <h1 className='text-3xl'>{v.name}</h1>
                    <p className='text-slate-300 pb-3'>{v.desc}</p>
                    <NavLink to={'/profile/lesson'} className='bg-orange-500 px-12 py-2 rounded-lg block text-center'>{v.btn}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default Leson
