import React, { useState } from 'react';
import nammQi from '../assets/nammQi.mp4';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios'
function Register() {
    // const navigate = useNavigate()

    const nav = useNavigate()
    const [formData, setFormdata] = useState({
        ism: "",
        familiya: "",
        userName: "",
        parol: "",
        tasdiqlash: "",
        gurux: ""
    })

    const onchange = (e) => {
        setFormdata({ ...formData, [e.target.name]: e.target.value })
    }
    const onSumbit = () => {
        fetch('http://localhost:5000/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ism: 'Sayfiddin',
                familiya: 'Rsuljonov',
                username: 'Sayfiddin',
                parol: '5555',
                tasdiqlash: '5555',
                gurux: '36-ATT-23',
                role: 'user'
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem("login",true)
                localStorage.setItem("token",1)
                
                nav("/profile")
                console.log(data)
            })
            .catch((error) => console.error('Error:', error));
    };



    return (

        <>
            <div className='w-[100%] h-[100vh] flex justify-center items-center'>
                <form onClick={onSumbit} className='py-6 sm:py-12 rgb lg:w-[50%] md:w-[80%] w-full sm:mx-6 mx-4 max-sm:px-6 text-white p-6 rounded-lg  gap-6 relative animate-border-draw'>
                    <NavLink to={'/'} className='text-2xl absolute top-6 '><i className="fa-solid fa-arrow-left"></i></NavLink>
                    <h1 className='text-2xl text-center font-semibold'>Ro'yhatdan O'tish</h1>
                    <div className='grid sm:grid-cols-2 gap-6'>
                        <div className='flex flex-col gap-6'>
                            <label>
                                <span>Ism</span><br />
                                <input required name='ism' onChange={onchange} type="text" className='mt-1 bg-white text-slate-800 w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                            </label>
                            <label>
                                <span>Familiya</span><br />
                                <input required type="text" onChange={onchange} name="familiya" className='mt-1 bg-white text-slate-800    w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                            </label>
                            <label>
                                <span>Foydalanuvchi nomi</span><br />
                                <input required type="text" onChange={onchange} name='userName' className='mt-1 bg-white text-slate-800   w-full py-1 px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                            </label>
                        </div>

                        <div className='flex flex-col gap-6'>
                            <label>
                                <span>Parol</span><br />
                                <input required type="password" onChange={onchange} name='parol' className='mt-1 bg-white text-slate-800    w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                            </label>
                            <label>
                                <span>Porolni tasdiqlash</span><br />
                                <input required type="text" onChange={onchange} name='tasdiqlash' className='mt-1 bg-white text-slate-800    w-full py-1  px-2 outline-none transition-all duration-300  bg-transparent ' placeholder='Ismingizni kiriting' />
                            </label>
                            <label className='text-slate-800 mt-1'>
                                <span className='text-white'>Gurux</span><br />
                                <select name="gurux" required onChange={onchange} id="" className='py-1 w-full'>
                                    <option value="">Gurux</option>
                                    <option value="36-ATT-23">36-Att</option>
                                    <option value="35-ATT-23">35-Att</option>
                                    <option value="34-ATT-23">34-Att</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <button type='sumbit' className='w-full bg-white mt-6 py-1 text-slate-800 font-semibold'>Yuborish</button>
                </form>
                <video autoPlay muted className='object-cover h-full w-full absolute top-0 left-0 -z-10'>
                    <source src={nammQi} />
                </video>
            </div>
        </>
    );
}

export default Register;
