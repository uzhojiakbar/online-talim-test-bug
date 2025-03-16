import React, { useEffect } from 'react'
import Home from '../pages/Home'
import RootControl from './RootControl'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Root() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className='w-full max-w-[1920px] mx-auto'>
      <RootControl />
    </div>
  )
}

export default Root
