import React, { useState } from 'react'
import ProfileNavbar from '../../Navbar/ProfileNavbar'
import { lessonData } from './lessonData'

import { NavLink, useParams } from 'react-router-dom'
import Lessonid from './Lessonid'
import { useFan } from '../../../../Hooks/useFan'

function lesson() {
  const [selected, setSelected] = useState(1)
  return (
    <div>
      <ProfileNavbar />
      <div className=' flex gap-6 text-white bg-slate-800'>
        <div className='w-[20%] border-r border-slate-600 p-3 h-screen  overflow-auto pt-20'>
          
              {/* <NavLink to={`/profile/lesson/${v?.id - 1 || 0}`} className={`cursor-pointer hover:bg-slate-700 mt-2 py-1 px-3 rounded-sm block  text-xl `}> </NavLink> */}
            </div>
        </div>
        <div className='w-[100%] h-screen overflow-auto p-3 pt-20 space-y-4'>
          {/* <Lessonid /> */}
        </div>
    </div>
  )
}

export default lesson
