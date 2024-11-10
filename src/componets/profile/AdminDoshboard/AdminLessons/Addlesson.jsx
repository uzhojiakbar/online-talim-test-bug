import React, { useEffect, useState } from 'react'
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;
import { instance } from '../../../../Hooks/api'
import { FaEye } from "react-icons/fa";
import getNotify from '../../../../Hooks/Notify';
function Addlesson() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    }
    const [subjectName, setSubjectName] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            const res = await instance.get('api/lessons')
            setData(res.data)
            setLoading(false)
        } catch (error) {
            console.error('xatolik', error)
            setData([])
            setLoading(false)
            notify('err', "Malumot olishdagi server xatoligi")
        }
    }

    useEffect(() => {
        getData()
    }, [])
    const handleSubmit = async (e) => {
        setLoading(true)
        handleOk()
        e.preventDefault();
        const data = {
            nomi: subjectName,
            desc: description,
            views: 0,
            teacher: "Asd teacher"
        }
        console.log(data);
        try {
            const response = await instance.post("api/lessons", data)
            console.log(response)
            getData()
            setLoading(false)
        } catch (error) {
            console.error(error)
            setLoading(false)
            if (error.response.data.message == "Ma'lumotlar to'g'ri emas") notify("err", "Ma'lumotlar to'g'ri emas")
            else if (error.response.data.message == "Dublikat qiymat: dars ID yoki nomi allaqachon mavjud") notify("err", "Dublikat qiymat: dars yoki nomi allaqachon mavjud")
            else if (error.response.data.message == "Dars qo'shishda server xatosi yuz berdi") notify("err", "Dars qo'shishda server xatosi yuz berdi")
            else { notify("err", "Qandeydir xatolik yuz berdi") }
        }
    };
    const { notify } = getNotify();

    return (
        <div>
            <Modal footer={[
                <Button onClick={handleSubmit} type="primary" className='mt-6 py-4' block>
                    Primary
                </Button>]} open={isModalOpen} onCancel={handleCancel}>
                <Input onChange={(e) => setSubjectName(e.target.value)} placeholder="Basic usage" className='mt-8 py-2' />
                <TextArea onChange={(e) => setDescription(e.target.value)} rows={4} maxLength={124} showCount className='mt-6' placeholder='Dars tasnifi' />
            </Modal>

            <h1 className='text-2xl font-semibold'>Mavjud Fanlar</h1>
            <div className='mt-6 grid lg:grid-cols-3 sm:grig-cols-2 gap-8 sm:grid-cols-3 grid-cols-1 pb-12'>
                <Button type="primary" className=' p-6 rounded-lg shadow-lg h-full' onClick={showModal}>
                    <span className='text-5xl text-white'><i className="fa-solid fa-plus"></i></span>
                </Button>
                {loading ? <div className='loaderWindow'><div className='loader'></div></div> : ""}
                {data?.map((i) => (
                    <div className='space-y-5 bg-white p-6 rounded-lg shadow-lg'>
                        <div>
                            <h1 className='text-3xl'>{i.nomi}</h1>
                            <p className='text-slate-500 pb-3'>{i.desc}</p>
                            <div className='flex justify-between items-center'>
                                <p>{i.teacher}</p>
                                <p className='text-blue-500 flex items-center  gap-2'> <FaEye /> {i.views}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div >
        </div >
    )
}

export default Addlesson
