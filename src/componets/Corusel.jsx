import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ticher from '../assets/tichers.png'
import { ticherData } from "../utils/tichersData";

const Corusel = () => {
  const settings = {
    dots: true, // pastda nuqtalar bo'ladi
    infinite: true, // cheksiz slayder
    speed: 300, // slayd o'tish tezligi
    slidesToShow: 1, // bir vaqtning o'zida nechta slayd ko'rinadi
    slidesToScroll: 1, // bir marta nechta slayd o'tadi
    autoplay: true, // avtomatik aylanish
    autoplaySpeed: 3000, // avtomatik aylanish tezligi
    // arrows: false, // Chap va o'ng tugmalarini olib tashlash
  };

  return (
    <div data-aos="zoom-in">
      <Slider {...settings}>
        <div className="">
          <div className="px-16 mx-auto  w-full max-w-[1200px] rounded-lg overflow-hidden flex items-center justify-between">
            {/* Rasm qismi */}
            <div className="w-1/2 h-[400px] flex items-center justify-center relative overflow-hidden">
              <img src={ticher} alt="Ustoz rasmi" className="w-[80%] rounded-full absolute -translate-y-14 object-cover" />
            </div>

            {/* Ma'lumot qismi */}
            <div className="w-1/2 p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id}>
                    <h2 className="text-5xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="px-16 mx-auto  w-full max-w-[1200px] rounded-lg overflow-hidden flex items-center justify-between">
            {/* Rasm qismi */}
            <div className="w-1/2 h-[400px] flex items-center justify-center relative overflow-hidden">
              <img src={ticher} alt="Ustoz rasmi" className="w-[80%] rounded-full absolute -translate-y-14 object-cover" />
            </div>

            {/* Ma'lumot qismi */}
            <div className="w-1/2 p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id}>
                    <h2 className="text-5xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="px-16 mx-auto  w-full max-w-[1200px] rounded-lg overflow-hidden flex items-center justify-between">
            {/* Rasm qismi */}
            <div className="w-1/2 h-[400px] flex items-center justify-center relative overflow-hidden">
              <img src={ticher} alt="Ustoz rasmi" className="w-[80%] rounded-full absolute -translate-y-14 object-cover" />
            </div>

            {/* Ma'lumot qismi */}
            <div className="w-1/2 p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id}>
                    <h2 className="text-5xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="px-16 mx-auto  w-full max-w-[1200px] rounded-lg overflow-hidden flex items-center justify-between">
            {/* Rasm qismi */}
            <div className="w-1/2 h-[400px] flex items-center justify-center relative overflow-hidden">
              <img src={ticher} alt="Ustoz rasmi" className="w-[80%] rounded-full absolute -translate-y-14 object-cover" />
            </div>

            {/* Ma'lumot qismi */}
            <div className="w-1/2 p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id}>
                    <h2 className="text-5xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        {/* O'xshash boshqa slayderlar */}
      </Slider>
    </div>
  );
};

export default Corusel;
