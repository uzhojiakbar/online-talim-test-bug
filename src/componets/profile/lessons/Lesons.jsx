import React from 'react'
import { NavLink } from 'react-router-dom'
import { useFan } from '../../../Hooks/useFan'

function Leson() {
    const { fan, setFan } = useFan();
    return (
        <div className=' px-12  mt-6 grid lg:grid-cols-3 gap-8 sm:grid-cols-2 grid-cols-1'>
            {fan?.map((v) => (
                <div key={v.nomi} className='space-y-5 bg-slate-800 p-8 rounded-lg'>
                    <h1 className='text-3xl'>{v.nomi}</h1>
                    <p className='text-slate-300 pb-3'>{v.desc}</p>
                    <NavLink to={'/profile/lesson'} className='bg-orange-500 px-12 py-2 rounded-lg block text-center'>Fanga o'tish</NavLink>
                </div>
            ))}
        </div>
    )
}

export default Leson
