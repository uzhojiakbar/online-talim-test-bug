import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ticher from '../../assets/tichers.png'
import { ticherData } from "../../utils/tichersData";

const Corusel = () => {
  const settings = {
    dots: true, // pastda nuqtalar bo'ladi
    infinite: true, // cheksiz slayder
    speed: 300, // slayd o'tish tezligi
    slidesToShow: 1, // bir vaqtning o'zida nechta slayd ko'rinadi
    slidesToScroll: 1, // bir marta nechta slayd o'tadi
    autoplay: true, // avtomatik aylanish
    autoplaySpeed: 3000, // avtomatik aylanish tezligi
  };

  return (
    <div id='ustozlar' data-aos="zoom-in " >
      <Slider  {...settings}>
        <div className="">
          <div className=" mt-12 text-center  md:px-16 mx-auto rounded-lg ">
            <div className="max-md:text-center p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id} className=" border-slate-500 rounded-sm py-6">
                    <h2 className="lg:text-5xl text-4xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="">
          <div className=" mt-12 text-center  md:px-16 mx-auto rounded-lg ">
            <div className=" max-md:text-center p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id} className="border border-slate-500 rounded-sm py-6">
                    <h2 className="lg:text-5xl text-4xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      
        <div className="">
          <div className=" mt-12 text-center  md:px-16 mx-auto rounded-lg ">  
            <div className=" max-md:text-center p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id} className="border border-slate-500 rounded-sm py-6">
                    <h2 className="lg:text-5xl text-4xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        
        <div className="">
          <div className=" mt-12 text-center  md:px-16 mx-auto rounded-lg ">
            <div className=" max-md:text-center p-6">
              {ticherData.map((item) => {
                return (
                  <div key={item.id} className="border border-slate-500 rounded-sm py-6">
                    <h2 className="lg:text-5xl text-4xl font-semibold text-white">{item.name}</h2>
                    <p className="text-gray-500 mt-2">Fan : {item.fan}</p>
                    <p className="text-gray-500 mt-2">Tajriba {item.tajriba} yil</p>
                    <p className="text-gray-500 mt-2">{item.yutuqlar}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Corusel;
