import React from 'react'
import { LessonData } from '../../../utils/LesnosData'
import { NavLink } from 'react-router-dom'

function Leson() {
    return (
        <div className=' px-12  mt-6 grid lg:grid-cols-3 gap-8 sm:grid-cols-3 grid-cols-1'>
            {LessonData.map((v) => (
                <div key={v.id} className='space-y-3 bg-slate-800 p-4 rounded-lg'>
                    <h1 className='text-2xl'>{v.name}</h1>
                    <p className='text-slate-300 pb-3'>{v.desc}</p>
                    <NavLink to={'/profile/lesson'} className='bg-orange-500 px-6 py-1 rounded-lg'>{v.btn}</NavLink>
                </div>
            ))}
        </div>
    )
}

export default Leson
