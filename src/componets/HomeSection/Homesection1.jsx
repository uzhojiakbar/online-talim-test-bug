import React, { useState, useEffect } from 'react';
import att_logo from '../../assets/att_logo.png';
import { NavLink } from 'react-router-dom';
import { instance } from '../../Hooks/api'
function Homesection1() {

    const [fan, setFan] = useState(
        [
            {
                desc
                    :
                    "Kompyter tizimlari va tarmoqlari bu fan 15 ta mavzuni o'z ichiga oladi",
                teacher
                    :
                    "Kamoliddin Xaydarov ",
                nomi
                    :
                    "Kompyter tizimlari va tarmoqlari"
            },
        ]
    );



    return (
        <div id="darslar" className="lg:p-16 px-4 overflow-hidden">
            <div data-aos="fade-down" data-aos-duration="500" className="text-white text-center">
                <h1 className="text-[48px]">Darsliklar</h1>
                <p className="text-[18px]">Aniq reja bilan yaratilgan darsliklar</p>
            </div>
            <div className="mt-12 p-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {fan?.map((item) => (
                    <div
                        key={item?.nomi}
                        data-aos="fade-up"
                        className="bg-[#303d46] flex flex-col justify-between text-center gap-3 p-6 rounded-lg text-white">
                        <div className="bg-white p-4 rounded-full w-24 mx-auto">
                            <img src={att_logo} alt="Logo" />
                        </div>
                        <h1 className="text-[20px] font-bold">{item?.nomi}</h1>
                        <p className="text-[15px] text-[#8ca5bb]">{item?.desc}</p>
                        <NavLink
                            to="/login"
                            className="bg-[#FF6E30] hover:bg-[#df6c3a] w-[70%] mx-auto py-2 rounded-full text-[14px] font-[500]"
                        >
                            Fanga o'tish
                        </NavLink>
                        <h1 className="mt-6">{item.teacher}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Homesection1;
