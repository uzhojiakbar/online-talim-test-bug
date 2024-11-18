import React, { useEffect, useState } from 'react';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;
import { FaEye } from "react-icons/fa";
import { NavLink, } from 'react-router-dom';
import useFan from '../../../../Hooks/useFan';
import AddFan from '../../../../Hooks/AddFan';

function Addlesson() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isopen, setOpen] = useState(false);
    const [subjectName, setSubjectName] = useState("");
    const [description, setDescription] = useState("");

    const showModal = () => {
        setIsModalOpen(true);
    };

    const isModal = () => {
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const Cancel = () => {
        setOpen(false);
    };
    const { addFanFunction } = AddFan();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addFanFunction(subjectName, description);
    };

    const { fan, loading } = useFan()

    return (
        <div>
            <Modal footer={[
                <Button onClick={handleFormSubmit} type="primary" className='mt-6 py-4' block>
                    Yangi fan qo'shish
                </Button>]} open={isModalOpen} onCancel={handleCancel}>
                <Input onChange={(e) => setSubjectName(e.target.value)} placeholder="Basic usage" className='mt-8 py-2' />
                <TextArea onChange={(e) => setDescription(e.target.value)} rows={4} maxLength={124} showCount className='mt-6' placeholder='Dars tasnifi' />
            </Modal>
            <h1 className='text-2xl font-semibold'>Mavjud Fanlar</h1>
            <div className='mt-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-8 grid-cols-1 pb-12'>
                <Button type="primary" className=' p-6 rounded-lg shadow-lg h-full' onClick={showModal}>
                    <span className='text-5xl text-white'><i className="fa-solid fa-plus"></i></span>
                </Button>

                {loading && <div className='loaderWindow'><div className='loader'></div></div>}
                {fan?.map((i) => (
                    <div key={i.nomi} className="card ">
                        <a className="card1" href="#">
                            <NavLink to={`/admin/${i.nomi}`}>
                                <p>{i.nomi}</p>
                                <p className="small">{i.desc}</p>
                                <div className='flex justify-between small items-center'>
                                    <p>{i.teacher}</p>
                                    <p className='flex items-center gap-2 small'>{i.views} <span><FaEye /> </span></p>
                                </div>
                            </NavLink>
                            <div className="go-corner" href="#">
                            </div>
                        </a>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Addlesson;
