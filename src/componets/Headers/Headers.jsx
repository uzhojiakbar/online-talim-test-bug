import React from 'react';
import { headerData } from '../../utils/HeaderData';

function Headers() {
  return (
    <div className="text-white pt-8 bgimg lg:h-[80vh] h-[100vh] bg-cover bg-center bg-no-repeat relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 lg:p-12 p-8 h-full flex flex-col justify-center items-center">
        <div
          data-aos="zoom-in-up"
          className="space-y-8 font-[Poppins] text-center max-w-4xl mx-auto"
        >
          {headerData?.map((item) => (
            <div key={item.id} className="space-y-4 lg:p-8 p-4">
              <h1 className="lg:text-[44px] text-[36px] max-sm:text-[32px] font-semibold">
                {item.title}
              </h1>
              <p className="lg:text-[24px] text-[16px] text-[#FFFFFFCC] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Headers;
