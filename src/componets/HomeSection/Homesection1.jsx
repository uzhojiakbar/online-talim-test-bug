import React, { useState } from 'react'
import { SecCarddata } from '../../utils/section1Data'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import att_logo from '../../assets/att_logo.png'
import { Rate } from 'antd';
import useFan from '../../Hooks/useFan';
import { NavLink } from 'react-router-dom';
function Homesection1() {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
        });
    })
    const [count, setCount] = useState(6)
    const {fan} = useFan();

    return (
        <div id='darslar' className='lg:p-16 px-4 overflow-hidden'>
            <div data-aos="fade-down"
                data-aos-duration="500" className=' text-white text-center'>
                <h1 className='text-[48px]'>Darsliklar</h1>
                <p className='text-[18px] relative'>Aniq reja bilan yaratilgan darsliklar</p>
            </div>
            <div className=' mt-12 p-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8'>
                {fan?.slice(0, count)?.map((item) => (
                    <div data-aos="fade-up" data-aos-delay={`${item.delay}`} key={item.nomi} className='bg-[#303d46] flex flex-col justify-between text-center gap-3 p-6 rounded-lg text-white relative '>
                        <div className='bg-white p-4 rounded-full w-24 mx-auto'>
                            <img src={att_logo} alt="" className='' />
                        </div>
                        <h1 className='text-[20px] font-bold text-white'>{item.nomi}</h1>
                        <p className='text-[15px] text-[#8ca5bb]'>{item.desc}</p>
                        <NavLink to={`/login`} className='bg-[#FF6E30] hover:bg-[#df6c3a] w-[70%] mx-auto py-2 rounded-full text-[14px] font-[500]'>Fanga o'tish</NavLink>
                        <div className='flex gap-16 mt-6 items-center  justify-between  '>
                            <p className='text-[#8ca5bb] text-[14px] font-[500]'>Dars soni {item.views}</p>
                            <div>
                                <Rate className=''/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div data-aos="zoom-in" data-aos-duration="500" className='flex justify-center'>
                {SecCarddata.length > 6 && count < SecCarddata.length ? <button onClick={() => setCount(count + 3)} className='border-[1px] border-[#828080] rounded-lg px-12 py-3 hover:bg-[#FF6E30] hover:text-white transition-all text-[#FF6E30] font-[500] mt-12'>Yana ko'rsatish</button> : ''}
                {count >= SecCarddata.length ? <button onClick={() => setCount(6)} className='border-[1px] border-[#828080] rounded-lg px-12 py-3 hover:bg-[#FF6E30] hover:text-white transition-all text-[#FF6E30] font-[500] mt-12'>Kamaytirish</button> : ''}
            </div>
        </div >
    )
}

export default Homesection1
