import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;
import { instance } from '../../../../Hooks/api';
import { FaEye } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import { useFan } from '../../../../Hooks/useFan';
import axios from 'axios';

function Addlesson() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { fan, loading: kutish, handleSubmit: yuborishFucn, getData } = useFan();
    const [subjectName, setSubjectName] = useState("");
    const [description, setDescription] = useState("");
    const location = useLocation();

    useEffect(() => {
        fan ? '' : getData();
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        yuborishFucn(subjectName, description);
    };

    return (
        <div>
            <Modal footer={[
                <Button onClick={handleFormSubmit} type="primary" className='mt-6 py-4' block>
                    Primary
                </Button>]} open={isModalOpen} onCancel={handleCancel}>
                <Input onChange={(e) => setSubjectName(e.target.value)} placeholder="Basic usage" className='mt-8 py-2' />
                <TextArea onChange={(e) => setDescription(e.target.value)} rows={4} maxLength={124} showCount className='mt-6' placeholder='Dars tasnifi' />
            </Modal>

            <h1 className='text-2xl font-semibold'>Mavjud Fanlar</h1>
            <div className='mt-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 grid-cols-1 pb-12'>
                <Button type="primary" className=' p-6 rounded-lg shadow-lg h-full' onClick={showModal}>
                    <span className='text-5xl text-white'><i className="fa-solid fa-plus"></i></span>
                </Button>

                {kutish ? <div className='loaderWindow'><div className='loader'></div></div> : ""}
                {fan?.map((i) => (
                    <div key={i.nomi} className='space-y-5 bg-white p-6 rounded-lg shadow-lg cursor-pointer'>
                        <NavLink to={`/admin/${i.nomi}`}>
                            <h1 className='text-3xl'>{i.nomi}</h1>
                            <p className='text-slate-500 pb-3'>{i.desc}</p>
                            <div className='flex justify-between items-center'>
                                <p>{i.teacher}</p>
                                <p className='text-blue-500 flex items-center gap-2'> <FaEye /> {i.views}</p>
                            </div>
                        </NavLink>
                    </div>
                )

                )}
            </div>
        </div>
    );
}

export default Addlesson;
