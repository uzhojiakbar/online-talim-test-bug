import React from 'react'
import headersImg from '../../assets/headersImg.png'
import { headerData } from '../../utils/HeaderData'
function Headers() {
  return (
    <div className='text-white'>
      <div className='lg:p-16 p-8 grid md:grid-cols-2 sm:grid-cols-1 lg:gap-6 justify-center '>
        <div  data-aos="zoom-in-up" className='space-y-8 font-[Poppins] mt-8 flex h-[50%] flex-col justify-between'>
          {headerData?.map((item) => (
            <div key={item.id} className='space-y-8'>
              <h1 className='lg:text-[44px] text-[36px] max-sm:text-[32px] font-[400]'>{item.title}</h1>
              <p className='text-[18px] max-sm:text-[14px] text-[#FFFFFF8C]'>{item.desc}</p>
            </div>
          ))}
          <div className='bg-[#394347] shadow-[0px_0px_5px_silver] flex p-2 gap-2 items-center lg:w-[80%] rounded-lg pr-2'>
            <input type="text" placeholder='login...' className='px-3 py-2 w-full bg-transparent outline-none' />
            <button className='bg-[#FF6E30] hover:bg-[#df6c3a] px-12 py-[10px] rounded-sm'>Login</button>
          </div>
          <div className='text-3xl flex gap-8 '>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
       
        <div  data-aos="zoom-in" className='w-full  flex justify-end'>
          <img src={headersImg} alt="img" className='lg:w-[75%] max-md:w-[80%] max-md:mx-auto max-md:mt-16 md:w-[85%] ' />
        </div>
      </div>
    </div>
  )
}

export default Headers
